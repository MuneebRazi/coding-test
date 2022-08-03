const User = require('./user');

class Services {
  constructor(models) {
    this.models = models;

    this.init();
  }

  init() {
    this.services = {};

    this.User = new User(this.models);

    this.services = {
      User: this.User,
    };
  }
}

module.exports = Services;
