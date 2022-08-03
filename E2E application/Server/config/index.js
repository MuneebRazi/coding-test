const knexConfig = require('../knexfile');

const config = {
  server: {
    host: 'localhost',
    port: process.env.PORT,
  },
  db: knexConfig.test,
};

module.exports = config;
