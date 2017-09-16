'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

//database connection
mongoose.connect('mongodb://seguim:2316@ds036967.mlab.com:36967/mongo-nodestore');

// load routes
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false }));

app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;
