'use strict';

let express = require('express'),
   app = express(),
   api = require('./api/api'),
   errorHandler = require('./middleware/error-handler');

// setup app middleware, it just a function without returning anything
require('./middleware/app-middleware')(app);

app.use('/api', api);
app.use(errorHandler());


module.exports = app; // we make the app exportable so it can be use by other apps