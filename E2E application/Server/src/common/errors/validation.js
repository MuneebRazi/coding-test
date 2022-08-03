const AbstractError = require('./abstract-error');

class ValidationError extends AbstractError {
  constructor(message = 'Bad or invalid input provided') {
    super(400, 'BAD_REQUEST', message);
  }
}

module.exports = ValidationError;
