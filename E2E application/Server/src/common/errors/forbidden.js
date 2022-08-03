const AbstractError = require('./abstract-error');

class ForbiddenError extends AbstractError {
  constructor(type = 'FORBIDDEN', message = 'Invalid credentials were specified.') {
    super(403, type, message);
  }
}

module.exports = ForbiddenError;
