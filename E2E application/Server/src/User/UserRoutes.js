const api = require('express').Router();
const bcrypt = require("bcrypt");
const { createValidater, updateValidater } = require('./validator.js');
const UserModel = require('./UserModel');

api.post('/', async (req, res) => {
  if (createValidater(req)) return res.status(200).json(failResponseObject("USER_CREATION_FAILED", "Incomplete or missing data"));
  try {
    const { body } = req;
    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(body.password, salt);
    body.password = hash;
    const result = await UserModel.create(body);

    return res.status(200).json(successResponseObject("USER_CREATED", result, "User created successfully"));
  } catch (error) {
    return res.status(200).json(failResponseObject("USER_CREATION_FAILED", error));
  }
});

api.put('/', async (req, res) => {
  if (updateValidater(req)) return res.status(200).json(failResponseObject("USER_UPDATED_FAILED", "Incomplete or missing data"));
  try {
    const { body } = req;
    if (body.newPassword) {
      const user = await UserModel.findOne(body.id);
      const isMatch = await bcrypt.compare(body.password, user.password);

      if (isMatch) {
        const salt = await bcrypt.genSalt(12)
        const hash = await bcrypt.hash(body.newPassword, salt);
        
        body.password = hash;  
      } else {
        return res.status(200).json(failResponseObject("USER_UPDATE_FAILED", 'Password did not match'));
      }
    }
    delete body.newPassword;
    const result = await UserModel.update(body);

    return res.status(200).json(successResponseObject("USER_UPDATED", result, "User updated successfully"));
  } catch (error) {
    return res.status(200).json(failResponseObject("USER_UPDATE_FAILED", error));
  }
});

api.get('/', async (req, res) => {
  try {
    const result = await UserModel.findAll();

    return res.status(200).json(successResponseObject("USERS_FOUND", result, "Users found successfully"));
  } catch (error) {
    return res.status(200).json(failResponseObject("USERS_GET_FAILED", error));
  }
});

api.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await UserModel.deleteOne(id);

    return res.status(200).json(successResponseObject("USER_DELETED", result, "User deleted successfully"));
  } catch (error) {
    return res.status(200).json(failResponseObject("USER_DELETION_FAILED", error));
  }
});

const successResponseObject = (type, result, message) => {
  return {
    type,
    result,
    success: true,
    message
  }
}

const failResponseObject = (type, message) => {
  return {
    type,
    success: false,
    result: null,
    message: "" + message
  }
}
module.exports = api;