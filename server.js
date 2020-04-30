const express = require("express");
const bodyParser = require("body-parser");
const axios = require('axios');
const cors = require('cors');

const app = express();


//Bodyparse middleware
app.use(bodyParser.json());

const url = "https://api.twitter.com/1.1/search/tweets.json";

const headers = {
  "Content-Type": "application/json",
  Authorization: "Bearer AAAAAAAAAAAAAAAAAAAAALf9DgEAAAAA9TgreZfbY0DuKStBv3tOFzqEXmg%3D5KKGnpIKtZfHUvsKMwd2Kn0PAK7bSMyd34u5b5ascyfN2z7Dmr",
  Accept: "application/json"
};

const params = {
  q: 'nasa',
  result_type: 'recent',
  count: 1
}

axios.get(url, {params, headers}).then(res => {
  console.log(res.data)
}).catch(error => {
  console.log('Error is ', error)
})

app.use(cors());

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server stared on ${port}`));
