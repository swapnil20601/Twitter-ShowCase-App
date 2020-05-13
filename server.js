const express = require("express");
const bodyParser = require("body-parser");
const tweetRoutes = require("./routes/tweets");
const axios = require("axios");
const cors = require("cors");

const app = express();

//Bodyparse middleware
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

//app.use(cors());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use("/feed", tweetRoutes);

//port
const port = process.env.PORT || 5000;

app.listen(port, (err) => {
  if (err) {
    console.log("Error", err);
  }
  console.log(`Server stared on ${port}`);
});
