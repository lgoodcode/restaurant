/**
 *  Module dependencies
 */
var express = require('express');
var http = require('http');
var https = require('https');
var fs = require('fs');
var path = require('path');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var cors = require('cors');
// Using the cookie adheres to the double cookie submit CSRF protection
var csurf = require('csurf')({ cookie: true });
var morgan = require('morgan');
var handlebars = require('express-handlebars');
var compression = require('compression');
var debug = require('debug');

var mainRouter = require('./routes/mainRouter');
var config = require('./config');

var app = express();
var log = debug('app:log');
var error = debug('app:error');
debug.log = console.log.bind(console); // Don't forget to bind to console!


/**
 *  Middleware
 */

// Handlebars view template engine
app.engine('.html', handlebars({ 
  defaultLayout: 'main',
  extname: '.html' 
}));
app.set('view engine', '.html');

// Disable the express header for security
app.disable('x-powered-by');

// Parse JSON and form data in req.body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

// Parses cookies to be used in req.cookies and for CSRF 
app.use(cookieParser());

// Create sessions stored in memory and not just in cookies
app.use(session(config.cookies));

// Compress all responses
app.use(compression());

// Places the /public directory static and sets custom cache control
app.use(express.static(path.join(__dirname, 'public'), {
  maxAge: '365d',
  setHeaders: customCacheControl
}));

app.use('/lib', express.static(path.join(__dirname, 'lib'), { maxAge: '365d' }));

// log only 4xx and 5xx responses to console
app.use(morgan('dev', {
  skip: function (req, res) { return res.statusCode < 400 }
}));

// log all requests to access.log
app.use(morgan('common', {
  stream: fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
}));

// Add the CSRF token to the request object to be used for any view
app.use(csurf, function(req, res, next) {
  res.locals.csrfToken = req.csrfToken();
  next();
});

// // Session-persisted message middleware
// app.use(function(req, res, next) { 
//   let err = req.session.form_errors;
//   let input = req.session.form_input;
//   delete req.session.form_errors;
//   delete req.session.form_input;
//   res.locals.form_errors = err;
//   res.locals.form_input = input;

//   next();
// });


// Cache function
function customCacheControl(res, path) {
  // All files except html will have max-age of 1 year
  if (express.static.mime.lookup(path) === 'text/html')
    res.setHeader('Cache-Control', 'public, max-age=0');
}



/**
 *  Routes
 */

app.use('/', mainRouter);


// Error handler for promises - silently catch
process.on('uncaughtException', function(err) {
  error('uncaught error\n' + err);
});

// Error handler
app.use(function(err, req, res, next){
  error(err.stack);
  next();
});

// 404 handler
app.use(function(req, res, next) {
  res.status(404);
  res.render('error');
});



/**
 *  SSL settings
 */
var ssl_options = {
  key: fs.readFileSync(__dirname + '/ssl/cert-key.pem'),
  cert: fs.readFileSync(__dirname + '/ssl/cert.crt'),
  ca: fs.readFileSync(__dirname + '/ssl/cacert.crt'),
  requireCert: true
};

var server = http.createServer(app).listen(config.PORT, function() {
    log( 'Express started in ' + app.get('env') + ' mode on ' 
    + config.URL + ':' + config.PORT + '; press Ctrl-C to terminate.' );
});


/**
 *  If this script is ran directly, require.main === module will be true;
 *  if it is false, the script has been loaded from another script
 *  using require.
 *
 *  If ran directly, start server app with clustering
 */
if (require.main === module) {
  var cluster = require('cluster');
  var debug_cluster = require('debug')('cluster');
  // Fork workers using built-in "os" module to get number of CPU cores
  require('os').cpus().forEach(() => cluster.fork());
  
  // log any workers that disconnect; if a worker disconnects, it
  // should then exit, so we'll wait for the exit event to spawn
  // a new worker to replace it
  cluster.on('disconnect', function(worker) {
    debug_cluster('CLUSTER: Worker %d disconnected from the cluster.', worker.id);
  });
  
  // when a worker dies (exits), create a worker to replace it
  cluster.on('exit', function(worker, code, signal) {
    debug_cluster('CLUSTER: Worker %d died with exit code %d (%s)', worker.id, code, signal);
    cluster.fork();
  });
}
// application imported as a module via "require": export function to create server
else module.exports = server;