const express = require("express");
const router = express.Router();

//@Route GET api/auth

//@acces public
router.get("/", (req, res) => {
  res.send("auth route");
});

module.exports = router;
