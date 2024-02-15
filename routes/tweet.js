var express = require('express');
var router = express.Router();



router.get('/allTweets', (req, res) => {
  fetch(`http://localhost:3000/`)
    .then(response => response.json())
    .then(data => {
      if (data.status === 'ok') {
        res.json({ articles: data.articles });
      } else {
        res.json({ articles: [] });
      }
    });
});

module.exports = router;
