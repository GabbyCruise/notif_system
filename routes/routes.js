/**+---------------------------------------------------+
 * Original Author : Gabriel Jonah (Gabby)
 * Copyright : (c) 2022 harvestpad. ALl right reserved
 * version number : 1.0.0 beta
 * filename: parishioners.js
 * +---------------------------------------------------+
*/
const express = require('express');
const router  = express.Router();
const users = require('../controllers/user')


//USER ROUTES
router.get('/login', (req, res) => {
  res.send('this is the homepage of this app');
});

// router.get('/me', users)


module.exports = router;