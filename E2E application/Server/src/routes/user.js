const api = require('express').Router();
const Joi = require('joi');
const UserValidations = require('../models/user/user-validations');
const validate = require('../middleware/validator');
const { successResponseObject } = require('../common/Status');
class User {
  constructor(app, services) {

    this.api = api;
    this.services = services;
    this.init();
  }

  init() {
    this.api.post('/', validate(this.createSchema), this.create.bind(this));
    this.api.put('/', this.update.bind(this));
    this.api.get('/', this.get.bind(this));
    this.api.delete('/:id', this.delete.bind(this));
  }

  createSchema = Joi.object({
    fullName: UserValidations.fullName.required(),
    email: UserValidations.email.required(),
    contact: UserValidations.contact.required(),
    address: UserValidations.address.required(),
    age: UserValidations.age.required(),
    password: UserValidations.password.required(),
  });

  async create(req, res, next) {
    try {
      const { body } = req;

      const user = await this.services.User.create(body);

      return res.status(200).json(successResponseObject(user));
    } catch (error) {
      return next(error);
    }
  }

  async update(req, res, next) {
    try {
      const { body } = req;

      const user = await this.services.User.update(body);

      return res.status(200).json(successResponseObject(user));
    } catch (error) {
      return next(error);
    }
  }

  async get(req, res, next) {
    try {
     
      const user = await this.services.User.get();

      return res.status(200).json(successResponseObject(user));
    } catch (error) {
      return next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const { id } = req.params;

      const user = await this.services.User.delete(id);

      return res.status(200).json(successResponseObject(user));
    } catch (error) {
      return next(error);
    }
  }
}

module.exports = User;
