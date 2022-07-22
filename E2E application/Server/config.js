const knexConfig = require('./knexfile');

const config = {
  db: knexConfig.test,
};

module.exports = config;
