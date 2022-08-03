const Users = require('./user');

class Models {
  constructor(service) {
    this.service = service;
    this.init();
  }

  init() {
    this.Users = new Users(this.service);
    
  }
}

module.exports = Models;
