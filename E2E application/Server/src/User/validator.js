const joi = require("joi");

module.exports.createValidater = (req) => {
  let schema = joi.object({
    fullName: joi.string().required(),
    contact: joi.string().required(),
    address: joi.string().allow(''),
    age: joi.number().required(),
    email: joi.string().min(8).max(32).required(),
    password: joi.string().min(8).max(32).required(),
  });

  return schema.validate(req.body, { allowUnknown: true }).error;
};

module.exports.updateValidater = (req) => {
  let schema = joi.object({
    id: joi.number().required(),
    fullName: joi.string().required(),
    contact: joi.string().required(),
    address: joi.string().allow(''),
    age: joi.number().required(),
    email: joi.string().min(8).max(32).required(),
  });
  
  return schema.validate(req.body, { allowUnknown: true }).error;
};