'use strict';

var _ = require('lodash');

let config = {
  dev: 'development',
  test: 'testing',
  prod: 'production',
  port: process.env.PORT || 3000
};

// check to see if the NODE_ENV was set, otherwise set it to 'dev'
process.env.NODE_ENV = process.env.NODE_ENV || config.dev;

// set config.env to whatever the NODE_ENV is.
config.env = process.env.NODE_ENV;

let envConfig = require(`./${config.env}`);

module.exports = _.merge(config, envConfig);