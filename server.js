// require('rootpath')();
const express    = require('express');
const app        = express();
const cors       = require('cors');
const morgan     = require('morgan');
const dotenv     = require('dotenv');
const bodyParser = require('body-parser');
const session    = require('cookie-session');
const flash      = require('connect-flash');
const layout     = require('express-ejs-layouts');
// const errorHandler = require('middleware/error-handler');
// const adminroutes  = require('./routes/admin.route');
// const parishAdminRoute = require('./routes/parish.admin.routes');
const users = require('./routes/routes');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));
dotenv.config();

// const connection = require('./helpers/newsampledb');

/* ----------- PUBLIC FILES --------- */
app.use(express.static('public'));
app.use(express.static('uploads'));


/* ---------- SESSION CONFIG -------- */
app.use(session({
  cookie: {maxAge: 604800000 },
  secret: 'master-harvest-secret-pad-key-is-the-harvest-collate-ion',
  resave: false,
  saveUninitialized : false,
}));

/* --------- PROMPT MESSAGES -------- */
app.use(flash());
app.use(function (req, res, next ) {
  res.locals.processError = req.flash('processError');
  res.locals.success      = req.flash('success');
  res.locals.loginFirst   = req.flash('login_first');
  res.locals.emptyField   = req.flash('emptyField');
  res.locals.required     = req.flash('required');
  res.locals.message      = req.flash('message');
  res.locals.duplicate    = req.flash('duplicate');
  res.locals.regFailed    = req.flash('reg_failed');
  res.locals.notFound     = req.flash('not_found');
  res.locals.digits       = req.flash('digits');
  res.locals.failure      = req.flash('failure');
  res.locals.parishList   = req.flash('data');
  next();
});

//----------- EJS VIEWS -----------//
app.use(layout);
app.set('layout', './layouts/root');
app.set('view engine', 'ejs');


//----------- ADMIN ROUTE -----------//
// app.use(adminroutes);


//---------- API ROUTES -------------//
app.use('/user', users);
// app.use('/pear/admin', parishAdminRoute);

// global error handler
// app.use(errorHandler);

// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
app.listen(port, () => console.log('Server listening on port ' + port));

