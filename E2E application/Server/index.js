const express = require('express');
const app = express();
const cookieParser = require("cookie-parser");
const server = require("http").createServer(app);

const UserRoute = require('./src/User/UserRoutes');

require('dotenv').config();

app.use((req, res, next) => {
  var allowedOrigins = [
    "http://localhost:3000",
  ];
  var origin = req.headers.origin;
  if (allowedOrigins.indexOf(origin) > -1) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-with, Content-Type, Accept, Authorization");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
  next();
});

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/v1/users', UserRoute);

server.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});