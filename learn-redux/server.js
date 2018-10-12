const path = require('path');
const express = require('express');
const setupMiddleware = require('./serverMiddleware');
require('dotenv').config();

const app = express();

// Apply the right middlewares for if we're in dev or prod mode
setupMiddleware(app);

app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const port = process.env.PORT || 7770
app.set('port', port);

app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${port}`);
});
