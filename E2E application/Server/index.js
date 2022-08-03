require('dotenv').config({ debug: true });

const App = require('./src/index.js');

const app = new App();
app.start();
