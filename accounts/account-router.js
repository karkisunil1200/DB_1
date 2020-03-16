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

router.get('/:id', (req, res) => {
  const id = req.params.id;
  console.log(id);
  db('accounts')
    .where({id})
    .then(account => {
      if (account) {
        res.status(200).json({data: account});
      } else {
        res.status(404).json({message: 'Account not found'});
      }
    })
    .catch(error => {
      res.status(500).json({message: 'Something went wrong', error: error.message});
    });
});

module.exports = router;
