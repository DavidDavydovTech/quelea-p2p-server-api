// Packages
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const compression = require('compression');

const app = express();
app.use(cookieParser());
app.use(cors());
app.use(compression());

app.route('/')
  .get((req, res) => {
    res.status(200).send('Hi from the API!')
  });

module.exports = app;