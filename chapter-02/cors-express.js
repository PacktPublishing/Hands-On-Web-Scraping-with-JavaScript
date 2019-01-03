const cors = require('cors');
const http = require('http');
const moment = require('moment');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('port', PORT);
app.set('x-powered-by', false);

app.use((req, res, next) => {
  res.set('Date', moment.utc().format('ddd, DD MMM YYYY HH:mm:ss [GMT]'));
  next();
});

// Enable CORS preflight for all requests
app.options('*', cors());

// Enable CORS for specific route
app.get('/', cors(), (req, res) => {
  const __html__ = `<html><!-- Some HTML here. --></html>`;
  res.set('Content-Type', 'text/html');
  res.send(__html__);
});

http.createServer(app)
  .listen(PORT, () => console.log(`App listening on port ${PORT}.`));
