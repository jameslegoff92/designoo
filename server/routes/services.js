const express = require('express');
const router = express.Router();
const contact = undefined;

router.get('/app-design', (req, res) => {
  res.render('pages/app-design', { contact });
})

router.get('/web-design', (req, res) => {
  res.render('pages/web-design', { contact });
})

router.get('/graphic-design', (req, res) => {
  res.render('pages/graphic-design', { contact });
})

module.exports = router;