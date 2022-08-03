const AbstractError = require('./abstract-error');

class NotFoundError extends AbstractError {
  constructor(message = "The resource that you're looking for could not be found.") {
    super(404, 'NOT_FOUND', message);
  }
}

module.exports = NotFoundError;
