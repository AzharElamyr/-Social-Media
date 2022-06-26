const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/register", async (req, res) => {
  const user = await new User({
    username: "abdallah",
    email: "abdallah.ashraf.elsayed@gmail.com",
    password: "123456789",
  });

  await user.save();
  res.send("ok");
});

module.exports = router;
