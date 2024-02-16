const mongoose = require("mongoose");

const tweetSchema = mongoose.Schema({
  author: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  content: String,
  date: String,
  like: Number,
});
const Tweet = mongoose.model("tweets", tweetSchema);
module.exports = Tweet;
