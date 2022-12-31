const express = require('express');

const router = express.Router();

router.get('/about',(req, res) => {
  const contact = undefined;
  res.render("pages/about", { contact });
})


module.exports = router;