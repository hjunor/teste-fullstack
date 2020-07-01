require('dotenv').config();
require('./services/mongoServices');
const express = require('express');
const routes = require('./router');

const app = express();

app.use(express.json());
// app.use(express.urlencoded());

app.use(routes);

app.listen(3333);
