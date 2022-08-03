class AbstractError extends Error {
  #messageType = 'string';

  constructor(statusCode, type, message) {
    super(typeof (message) === 'object' ? JSON.stringify(message) : message);

    Error.captureStackTrace(this, this.constructor);

    this.type = type;
    this.statusCode = statusCode;

    if (typeof (message) === 'object') {
      this.#messageType = 'object';
    }
  }

  toJSON() {
    if (this.#messageType === 'object') {
      this.message = JSON.parse(this.message);
    }

    return {
      error: {
        type: this.type,
        statusCode: this.statusCode,
        message: this.message,
      },
    };
  }
}

module.exports = AbstractError;
