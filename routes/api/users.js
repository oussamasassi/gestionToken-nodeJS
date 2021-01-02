var express = require("express");
var router = express.Router();

//@Route GET api/users

//@acces public
router.get("/", (req, res) => {
  res.send("users router");
});

module.exports = router;
