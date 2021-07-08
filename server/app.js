const express = require('express');
const path = require('path');
const app = express();
const PORT = 8080;
const HOST = '0.0.0.0';

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);