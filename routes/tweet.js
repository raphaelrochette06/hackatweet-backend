var express = require("express");
var router = express.Router();
const Tweet = require("../models/tweets");

// router.get("/allTweets", (req, res) => {
//   fetch(`http://localhost:3000/`)
//     .then((response) => response.json())
//     .then((data) => {
//       if (data.status === "ok") {
//         res.json({ tweet: data.tweet });
//       } else {
//         res.json({ allTweet: [] });
//       }
//     });
// });

router.post("/postTweet", (req, res) => {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();
  const formattedTime = `${hours}:${minutes}:${seconds}`;
  const newTweet = new Tweet({
    author: req.body.id,
    content: req.body.content,
    date: formattedTime,
    like: 0,
  });

  newTweet.save().then((newText) => {
    res.json({ result: true, Tweet: newText });
  });
});

module.exports = router;
