const Joi = require('joi');

class UserValidations {
  static fullName = Joi.string();
  static contact = Joi.string();
  static address = Joi.string();
  static age = Joi.number();
  static email = Joi.string().min(8).max(32);
  static password = Joi.string().min(8).max(32);
}

module.exports = UserValidations;
