'use strict';

// config before any require
let config = require('./server/config/config'),
   app = require('./server/server'),
   logger = require('./server/utils/logger');

app.listen(config.port);
console.log(`listening on port ${config.port}`);