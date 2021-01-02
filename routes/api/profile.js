const express = require("express");
const router = express.Router();

//@Route GET api/profile

//@acces public
router.get("/", (req, res) => {
  res.send("profile router");
});

module.exports = router;
