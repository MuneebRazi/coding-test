const knex = require('knex');

class Service {
  constructor(config) {
    this.config = config;
    this.init();
  }

  init(config = this.config) {
    this.initKnex(config.db);
  }

  initKnex(config) {
    this.knex = knex(config);
  }
  async shutdown() {
    await this.knex.destroy();
    await this.redisShutdown();
  }

}

module.exports = Service;
