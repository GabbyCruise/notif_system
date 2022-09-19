const express = require('express');
const router  = express.Router();
const users = require('../controllers/user')


//USER ROUTES
router.get('/login', (req, res) => {
  res.send('this is the homepage of this app');
});

module.exports = router;