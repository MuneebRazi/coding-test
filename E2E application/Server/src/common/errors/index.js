const NotAuthorizedError = require('./not-authorized');
const NotFoundError = require('./not-found');
const ValidationError = require('./validation');
const DuplicateEntryError = require('./duplicate-entry');

global.NotAuthorizedError = NotAuthorizedError;
global.NotFoundError = NotFoundError;
global.ValidationError = ValidationError;
global.DuplicateEntryError = DuplicateEntryError;
