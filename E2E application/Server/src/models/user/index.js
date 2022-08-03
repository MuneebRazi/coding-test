const AbstractModel = require('../abstract-model');

class Users extends AbstractModel {

  async get() {
    const result = await this.knex(this.tableName)
      .select('id', 'fullName', 'contact', 'address', 'age', 'email');

    return result || [];
  }
}

module.exports = Users;
