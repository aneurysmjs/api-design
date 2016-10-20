let bodyParser = require('body-parser'),
   morgan = require('morgan');

// setup a global middleware
module.exports = app => {
  app.use(morgan('combined'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
}; // we make the app exportable so it can be use by other apps