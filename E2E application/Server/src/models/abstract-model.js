const { wrapError, UniqueViolationError } = require('db-errors');

class AbstractModel {

  constructor(service) {
    this.knex = service.knex;

    this.tableName = this.constructor.name.toLowerCase();
    
  }

  async create(record) {
    try {
      const result = await this.knex(this.tableName)
        .insert(record)
        .returning('*');

      return result[0];
    } catch (error) {
      error = wrapError(error);
      if (error instanceof UniqueViolationError) {
        throw new DuplicateEntryError(error.message);
      } else {
        throw error;
      }
    }
  }

  async update(record) {
    try {
      const result = this.knex(this.tableName)
        .update(record)
        .where('id', record.id)
        .returning('*');

      return result;
    } catch (error) {
      throw error;
    }
  }

  async findAll() {
    try {
      const result = await this.knex(this.tableName)
        .select();

      return result;
    } catch (error) {
      throw error;
    }
  }

  async findOne(id) {
    try {
      const result = await this.knex(this.tableName)
        .select()
        .where('id', id);

      return result[0];
    } catch (error) {
      throw error;
    }
  }

  async deleteOne(id) {
  try {

    const result = await this.knex(this.tableName)
      .delete()
      .where('id', id);

    return result;
  } catch (error) {
    throw error;
  }
}

}

module.exports = AbstractModel;
