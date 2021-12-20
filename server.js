require("dotenv").config();
const express = require("express");
const fs = require("fs");
const cluster = require("cluster");
const path = require("path");
const cookieParser = require("cookie-parser");
const session = require("cookie-session");
const cors = require("cors");
// Using the cookie adheres to the double cookie submit CSRF protection
const csurf = require("csurf")({ cookie: true });
const morgan = require("morgan");
const compression = require("compression");

const mainRouter = require("./routes/mainRouter");

const app = express();

// Set process name
if (process.env.APP_NAME) {
  process.title = process.env.APP_NAME;
}

if (process.env.NODE_ENV === "development") {
  var debug = require("debug");
  var log = debug("app:log");
  var error = debug("app:error");
  debug.log = console.log.bind(console); // Don't forget to bind to console!

  // if (process.env.HMR === 'true') {
  //   const webpack = require("webpack");
  //   const webpackConfig = require("./webpack.config");
  //   const compiler = webpack(webpackConfig);

  //   app.use(require("webpack-dev-middleware")(compiler, {
  //     publicPath: webpackConfig.output.publicPath,
  //   }));

  //   app.use(require('webpack-hot-middleware')(compiler, {
  //     log: console.log,
  //     path: '/__webpack_hmr',
  //     heartbeat: 10 * 1000,
  //   }));
  // }
}
else {
  var log = console.log;
  var error = console.error;
}

/**
 * Middleware
 */
app.set("view engine", "ejs");
// Disable the express header for security
app.disable("x-powered-by");
// Parse JSON and form data in req.body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());
// Parses cookies to be used in req.cookies and for CSRF
app.use(cookieParser());
// Create sessions stored in memory and not just in cookies
app.use(session({
  secret: process.env.COOKIE_SECRET,
  name: "session",
  cookie: {
    secure: false,
    sameSite: "lax",
    httpOnly: true
  }
}));
// Compress all responses
app.use(compression());
// Places the /public directory static and sets custom cache control
app.use(
  express.static(path.join(__dirname, "public"), {
    maxAge: "365d",
  })
);

// log only 4xx and 5xx responses to console
app.use(
  morgan("dev", {
    skip: (req, res) => res.statusCode < 400,
  })
);

// log all requests to access.log
app.use(
  morgan("common", {
    stream: fs.createWriteStream(path.join(__dirname, "access.log"), {
      flags: "a",
    }),
  })
);

// Add the CSRF token to the request object to be used for any view
app.use(csurf, function (req, res, next) {
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

/**
 * Routes
 */
app.use("/", mainRouter);

// Error handler for promises - silently catch
process.on("uncaughtException", function (err) {
  error("uncaught error\n" + err);
});

// Error handler
app.use(function (err, req, res, next) {
  error(err.stack);
  next();
});

// 404 handler
app.use(function (req, res, next) {
  res.status(404);
  res.render("error");
});

var server;

/**
 *  SSL settings
 */
if (process.env.SSL === "false") {
  server = require("http").createServer(app);
} else {
  const ssl_options = {
    key: fs.readFileSync("./bin/server.key"),
    cert: fs.readFileSync("./bin/server.cert")
  };
  // https://stackoverflow.com/questions/8605720/how-to-force-ssl-https-in-express-js
  function requireHTTPS(req, res, next) {
    // The 'x-forwarded-proto' check is for Heroku
    if (!req.secure && req.get('x-forwarded-proto') !== 'https' && process.env.NODE_ENV !== "development") {
      return res.redirect('https://' + req.get('host') + req.url);
    }
    next();
  }

  app.use(requireHTTPS);

  server =  require("https").createServer(ssl_options, app);
}

if (cluster.isWorker) {
  module.exports = server.listen(process.env.PORT);
} 
else if (cluster.isMaster) {
  const numCpus = require("os").cpus().length;

  for (let i = 0; i < numCpus; i++) 
    cluster.fork();

  // When a worker dies (exits), create a worker to replace it
  cluster.on("exit", function (worker, code, signal) {
    cluster.fork();
  });

  console.log(`Express started in ${app.get("env")} mode on localhost:${process.env.PORT};`);
}