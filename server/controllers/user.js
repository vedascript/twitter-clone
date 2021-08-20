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

//put request for adding following in user's model
router.patch("/:id", async (req, res) => {
  let following = req.query.following;
  let id = req.params.id;
  console.log(id);
  const user = await User.findByIdAndUpdate(
    id,
    { $addToSet: { following } },
    { new: true }
  );
  console.log(user);
  res.status(201).json(user);
});

module.exports = router;
