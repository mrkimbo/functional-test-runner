const express = require('express');
const path = require('path');
const http = require('http');

exports.create = (port = 4000) => {
  server = express();
  
  // all environments
  server.set('port', port);
  
  // Disable CORS
  server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Headers', 'Content-Type,X-Requested-With,AP_APP_ID,AP_AUTH_TOKEN,AP_CHANNEL_NAME,accept,auspost-access-token');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
  });
  
  server.listen(port, () => {
    console.log(`Express server listening at http://localhost:${port}`);
  });
  
  return server;
};
