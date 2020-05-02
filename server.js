const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require("cors");

const app = express();

//Bodyparse middleware
app.use(bodyParser.json());

const url = "https://api.twitter.com/1.1/search/tweets.json";

const randomCount = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const headers = {
  "Content-Type": "application/json",
  Authorization:
    "Bearer AAAAAAAAAAAAAAAAAAAAALf9DgEAAAAA9TgreZfbY0DuKStBv3tOFzqEXmg%3D5KKGnpIKtZfHUvsKMwd2Kn0PAK7bSMyd34u5b5ascyfN2z7Dmr",
  Accept: "application/json",
};

// const params = {
//   q: "nasa",
//   result_type: "recent",
//   count: randomCount(5,10)
// };

const params = {
  q: "nasa",
  result_type: "popular",
  count: 100
};

//search for 5-10 tweets for a query parameter passed
// axios
//   .get(url, { params, headers })
//   .then((res) => {
//     for (const tweet of res.data.statuses) {
//      console.log('CREATD ON',tweet.created_at);
//      console.log('TWEET ',tweet.text);
//      console.log('RETWEET COUNT',tweet.retweet_count);
//      console.log('FAVORITE COUNT',tweet.favorite_count);
//      console.log('USER NAME',tweet.user.name);
//      console.log('image',tweet.user.profile_image_url);
//      console.log();
//     }
//   })
//   .catch((error) => {
//     console.log("Error is ", error);
//   });

axios
  .get(url, { params, headers })
  .then((res) => {
    const tweets = res.data.statuses;
    const randomIndex = (tweets) => {
      let index = Math.floor(Math.random() * tweets.length);
      return tweets[index];
    }

    let randomTweet = randomIndex(tweets)
     console.log('CREATD ON',randomTweet.created_at);
     console.log('TWEET ',randomTweet.text);
     console.log('RETWEET COUNT',randomTweet.retweet_count);
     console.log('FAVORITE COUNT',randomTweet.favorite_count);
     console.log('USER NAME',randomTweet.user.name);
     console.log('image',randomTweet.user.profile_image_url);
     console.log();
    })
  .catch((error) => {
    console.log("Error is ", error);
  });

app.use(cors());

//port
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server stared on ${port}`));
