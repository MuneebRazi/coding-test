require('./common/errors/index.js');

const { createNamespace } = require('cls-hooked');
const session = createNamespace('session');

const express = require('express');
const config = require('../config');
const Service = require('../service');
const Models = require('./models');
const Services = require('./services');
const Routes = require('./routes');
const Middleware = require('./middleware');

class App {
  constructor() {
    this.app = express();
    this.app.session = session;
    this.app.service = new Service(config);
    this.app.models = new Models(this.app.service);
    this.app.services = new Services(this.app.models);
    this.app.routes = new Routes(this.app, this.app.services);
    this.app.middleware = new Middleware(this.app, this.app.models, this.app.routes);

    this.app.shutdown = async () => {
      await this.app.service.shutdown();
    };
  }

  start() {
    this.app.listen(config.server.port, () => console.log(`Listening on port ${config.server.port}!`));
  }

  async shutdown() {
    console.log('Shutting me down!');
    await this.app.service.shutdown();
  }
}

module.exports = App;
