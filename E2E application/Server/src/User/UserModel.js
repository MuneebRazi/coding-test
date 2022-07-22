const knex = require('knex');
const config = require('../../config');

const knex_db = knex(config.db);

module.exports.create = async (record) => {
  try {
    const result = await knex_db('users')
      .insert(record)
      .returning('*');

    return result[0];
  } catch (error) {
    throw error;
  }
}

module.exports.update = async (record) => {
  try {
    const result = await knex_db('users')
      .update(record)
      .where('id', record.id)
      .returning('*');

    return result[0];
  } catch (error) {
    throw error;
  }
}

module.exports.findAll = async () => {
  try {
    const result = await knex_db('users')
      .select('id', 'fullName', 'contact', 'address', 'age', 'email');

    return result;
  } catch (error) {
    throw error;
  }
}

module.exports.findOne = async (id) => {
  try {
    const result = await knex_db('users')
      .select()
      .where('id', id);

    return result[0];
  } catch (error) {
    throw error;
  }
}

module.exports.deleteOne = async (id) => {
  try {

    const result = await knex_db('users')
      .delete()
      .where('id', id);

    return result;
  } catch (error) {
    throw error;
  }
}
