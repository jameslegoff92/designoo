const express = require('express');

const router = express.Router();

router.get('/locations', (req, res) => {
  const contact = undefined;
  res.render('pages/locations', { contact });
})

module.exports = router;