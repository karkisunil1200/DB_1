const express = require('express');

const db = require('../data/dbConfig');

const router = express.Router();

router.get('/', (req, res) => {
  db.select('*')
    .from('accounts')
    .then(account => {
      res.status(200).json({data: account});
    })
    .catch(error => {
      res.status(500).json({message: 'Something went wrong', message: error.message});
    });
});

module.exports = router;
