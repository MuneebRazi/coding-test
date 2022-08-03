const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');

const internalError = {
  error: {
    statusCode: 500,
    message: 'Internal Server Error',
  },
};

const invalidJsonError = {
  error: {
    statusCode: 400,
    message: 'Invalid JSON specified in the request body',
  },
};


class Middleware {
  constructor(app, models, routes) {
    this.app = app;
    this.models = models;
    this.routes = routes;

    this.init();
  }

  
  init() {
    
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(express.json());
    this.app.use((req, res, next) => {
      this.app.session.runAndReturn(() => next());
    });

    this.app.use((req, res, next) => {
      const requestId = req.requestId;
      this.app.session.set('REQUEST_ID', requestId);
      next();
    });

    this.app.use((req, res, next) => {
    
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
      res.setHeader("Access-Control-Allow-Credentials", true);
      res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-with, Content-Type, Accept, Authorization");
      res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
      next();
    });

    this.app.use(cookieParser());
    this.app.use((req, res, next) => {
      req.app = this.app;
      req.models = this.models;
      return next();
    });

    this.app.use('/', express.static(path.join('../', path.join(__dirname), 'public')));

    this.routes.init();
    this.app.use((req, res, next) => {
      next(new NotFoundError());
    });

    this.app.use((err, req, res, next) => {
      const statusCode = err.status || err.statusCode || 500;
      res.status(statusCode);
      if (statusCode === 500) {
        return res.json(internalError);
      }
      if (err instanceof SyntaxError && err.message.includes('in JSON')) {
        return res.json(invalidJsonError);
      }
      return res.json(err.toJSON());
    });
  }
}

module.exports = Middleware;
