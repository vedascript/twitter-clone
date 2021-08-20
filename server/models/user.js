const { Schema, model } = require("mongoose");

const user = Schema({
  name: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  profile_pic: { type: String, required: false },
  following: [{ type: String, default: [] }],
});

module.exports = model("User", user);
