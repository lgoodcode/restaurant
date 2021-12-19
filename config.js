module.exports = {
  VERSION: 1,
  BUILD: 1,
  URL: 'http://localhost',
  PORT: process.env.PORT || 80,
  
  baseURL: __dirname,

  cookies: {
    resave: false, // don't save session if unmodified
    saveUninitialized: true, // don't create session until something stored
    secret: '6LqK7Uctk34um15NJF69mm93UBgP4MzkaGmICfLs9Lad4MF1vESy66b54Me8AePp',
    name: 'session',
    cookie: {
      secure: false,
      sameSite: 'lax'
    }
  }
};