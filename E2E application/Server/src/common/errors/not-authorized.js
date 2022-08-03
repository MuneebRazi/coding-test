const AbstractError = require('./abstract-error');

class NotAuthorizedError extends AbstractError {
  constructor(type = 'AUTHORIZATION_ERROR', message = 'You are not authorized to access this resource.') {
    super(401, type, message);
  }
}

module.exports = NotAuthorizedError;
