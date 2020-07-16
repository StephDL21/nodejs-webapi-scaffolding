const express = require('express');
const app = express();
const router = express.Router();

const { dummyController } = require('../controllers/index.controller');

router.get('/', dummyController.get);

app.use('/api/dummy', router);

module.exports = app;
