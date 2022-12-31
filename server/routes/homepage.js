const express = require('express');

const router = express.Router();

router.get('/',(req, res) => {
  const contact = undefined;
  res.render("pages/index", { contact });
})


module.exports = router;