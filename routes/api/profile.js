const express = require("express");
const router = express.Router();
const auth = require("../../middelware/auth");
const Profile = require("../../models/Profile");
const User = require("../../models/User");
const { check, validationResult } = require("express-validator");

//@Route GET api/profile/me
//@desc get the current user profile
//@acces private
router.get("/me", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id,
    }).populate("User", ["name", "avatar"]);
    if (!profile) {
      return res.status(400).json({ msg: "There is no user" });
    }
    return res.json(profile);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("server error");
  }
});

//@Route POST api/profile
//@desc create or update a profile
//@acces private
router.post(
  "/",
  [
    auth,
    [
      check("status", "Status is required").not().isEmpty(),
      check("skills", "skills is required").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty())
  }
);

module.exports = router;
