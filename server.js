// Modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Use environments
require('./environments/config.environment');

// Init express app
const app = express();

//--------------------Use coors--------------------
app.use(cors());

app.use(bodyParser.json({ limit: process.env.REQUEST_LIMIT || '100kb' }));
app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: process.env.REQUEST_LIMIT || '100kb',
  })
);
app.use(bodyParser.text({ limit: process.env.REQUEST_LIMIT || '100kb' }));

// Use Routes
app.use(require('./routes/index.route'));

app.listen(process.env.HTTP_PORT, () => {
  console.log(`Listen port: ${process.env.HTTP_PORT}`);
});
