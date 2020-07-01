const express = require('express');

const routes = express.Router();

routes.get('/', (require, response) => {
  response.json({ mesage: 'ok' });
});

module.exports = routes;
