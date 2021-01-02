var express = require("express");
var router = express.Router();

//@Route GET api/posts

//@acces public
router.get("/", (req, res) => {
  res.send("pots router");
});

module.exports = router;
