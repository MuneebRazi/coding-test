
module.exports = (schema) => {
  const options = {
    abortEarly: false,
    allowUnknown: true, 
    errors: {
      wrap: {
        label: '',
      },
    },
    stripUnknown: true,
  };

  return (req, res, next) => {
    if (schema) {
      const results = schema.validate(req.body, options);
      if (results.error) {
        return next(new ValidationError(results.error.details));
      }

      req.body = results.value;
      return next();
    }

    throw new Error('Schema not provided');
  };
};
