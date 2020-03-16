const express = require('express');

const db = require('../data/dbConfig.js');

const accountRouter = require('../accounts/account-router');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json({api: 'up'});
});

server.use('/api/accounts', accountRouter);

server.use(express.json());

module.exports = server;
