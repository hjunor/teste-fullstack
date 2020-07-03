require('dotenv').config();
require('./services/mongoServices');
const bodyParser = require('body-parser');
const express = require('express');
const routes = require('./router');

const app = express();
// app.use(bodyParser.urlencoded());
app.use(express.json());

app.use(routes);

app.listen(3333);
