const express = require('express');

const routes = express.Router();

const auth = require('./middleware/authMiddleware');

const UsersController = require('./controllers/UsersController');
const AuthController = require('./controllers/AuthController');

routes.post('/user', UsersController.create);
routes.post('/auth', AuthController.authenticate);
routes.get('/user', auth, UsersController.store);

module.exports = routes;
