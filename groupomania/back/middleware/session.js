const session = require('express-session');
  app.set ('trust proxy', 1);
  app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false,
      httpOnly: false,
    }
  }, app)); 

module.exports = session;

