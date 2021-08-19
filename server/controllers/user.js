const router = require("express").Router();
const User = require("../models/user");

//register user
router.post("/register", async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json(user);
});

//login
router.post("/login", async (req, res) => {
  const user = await User.findOne({ username: req.body.username });
  console.log(user);

  //check availability of user
  if (!user) return res.status(404).json({ msg: "user not found" });

  //check the password
  if (user.password === req.body.password) return res.status(200).json(user);
  //wrong credentials
  else return res.status(404).json({ msg: "wrong credentials" });
});

module.exports = router;
