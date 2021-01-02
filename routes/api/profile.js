var express = require("express");
var router = express.Router();

//@Route GET api/profile

//@acces public
router.get("/", (req, res) => {
  res.send("profile router");
});

module.exports = router;
