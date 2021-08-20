const router = require("express").Router();
const Tweet = require("../models/tweet");
const User = require("../models/user");

//add tweet
router.post("/", async (req, res) => {
  const tweet = await Tweet.create(req.body);
  res.status(200).json(tweet);
});

//get tweets for homepage
router.get("/:id", async (req, res) => {
  //id of logged in user
  const loggedInUser = await User.findById(req.params.id);
  let following = loggedInUser.following;
  let tweets = [];

  tweets = await Tweet.find({ userId: { $in: following } });

  res.status(200).json(tweets);
});

// get tweets for user profile
router.get("/personal/:id", async (req, res) => {
  let tweets = [];
  const id = req.params.id;
  tweets = await Tweet.find({ userId: id });
  res.status(200).json(tweets);
});

module.exports = router;
