const { Schema, model } = require("mongoose");

const tweet = Schema({
  body: { type: String, required: true },
  userId: { type: String, required: true },
});

module.exports = model("Tweet", tweet);
