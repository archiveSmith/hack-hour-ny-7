const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const hackHourModule = require('../challenges/add-linked-list');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: true }));

app.use('/', express.static(path.join(__dirname, '../view')));

app.listen(3001, () => {
  console.log('Server is listening on port 3001');
});