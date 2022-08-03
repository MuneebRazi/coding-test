const AbstractError = require('./abstract-error');

class DuplicateEntryError extends AbstractError {
  constructor(message = 'An entity that matches one or more of those properties already exists') {
    super(409, 'CONFLICT', message);
  }
}

module.exports = DuplicateEntryError;
