const User = require('./user');

class Routes {
  
  constructor(app, services) {

    this.app = app;
    this.services = services;
  }

  init() {
    this.app.use('/v1/users', (new User(this.app, this.services)).api);
  }
}

module.exports = Routes;
