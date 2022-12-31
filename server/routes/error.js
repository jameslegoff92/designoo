const express = require('express');

const router = express.Router();

router.get('*', (req, res) => {
  const path = req.url;
  res.render('pages/error', { path })
})

module.exports = router;