const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser().json());
app.use(bodyParser.urlencoded( { extended: false }));

app.use('/', express.static(path.join(__dirname, '/public')));

app.listen(3001, () => {
  console.log('Server is listening on port 3000');
});