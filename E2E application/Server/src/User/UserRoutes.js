const api = require('express').Router();
const UserServices = require('./UserServices');
const { createValidater, updateValidater } = require('./validator.js');



api.post('/', async (req, res) => {
  if (createValidater(req)) return res.status(200).json(failResponseObject("USER_CREATION_FAILED", "Incomplete or missing data"));
  try {
    const { body } = req;
    const result = await UserServices.create(body);
    return res.status(200).json(successResponseObject("USER_CREATED", result, "User created successfully"));
  } catch (error) {
    return res.status(200).json(failResponseObject("USER_CREATION_FAILED", error));
  }
});

api.put('/', async (req, res) => {
  if (updateValidater(req)) return res.status(200).json(failResponseObject("USER_UPDATED_FAILED", "Incomplete or missing data"));
  try {
    const { body } = req;
    
    const result = await UserServices.update(body);

    return res.status(200).json(successResponseObject("USER_UPDATED", result, "User updated successfully"));
  } catch (error) {
    return res.status(200).json(failResponseObject("USER_UPDATE_FAILED", error));
  }
});

api.get('/', async (req, res) => {
  try {
    const result = await UserServices.get();

    return res.status(200).json(successResponseObject("USERS_FOUND", result, "Users found successfully"));
  } catch (error) {
    return res.status(200).json(failResponseObject("USERS_GET_FAILED", error));
  }
});

api.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await UserServices.delete(id);

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