var express = require("express");
var router = express.Router();

//@Route GET api/auth

//@acces public
router.get("/", (req, res) => {
  res.send("auth route");
});

module.exports = router;
