const express = require('express');
const app = express();

app.use(require('./dumy.route'));

module.exports = app;
