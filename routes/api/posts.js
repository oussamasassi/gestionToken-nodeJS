const express = require("express");
const router = express.Router();

//@Route GET api/posts

//@acces public
router.get("/", (req, res) => {
  res.send("pots router");
});

module.exports = router;
