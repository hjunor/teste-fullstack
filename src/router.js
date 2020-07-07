const express = require('express');

const routes = express.Router();

const auth = require('./middleware/authMiddleware');

const UsersController = require('./controllers/UsersController');
const AuthController = require('./controllers/AuthController');
const CategoryController = require('./controllers/CategoryController');

routes.post('/auth', AuthController.authenticate);
routes.post('/user', UsersController.create);
routes.get('/user', auth, UsersController.store);

routes.post('/category', auth, CategoryController.create);
routes.get('/category', auth, CategoryController.storeAll);
routes.get('/category/:id', auth, CategoryController.store);
routes.post('/category/title/:id', auth, CategoryController.updateTitle);
routes.post('/category/description/:id', auth, CategoryController.updateDesc);
routes.get('/category/delete/:id', auth, CategoryController.delete);

module.exports = routes;
