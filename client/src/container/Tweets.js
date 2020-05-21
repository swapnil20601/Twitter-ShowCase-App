import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "../components/Homepage/Homepage";
import SearchTweets from "./SearchTweets/SearchTweets";
import RandomTweet from "../components/RandomTweet/RandomTweet";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

class Tweets extends Component {
  render() {
    return (
      <>
        <header>
          <NavBar />
        </header>
        <main>
          <Route path="/api/search-tweets" exact component={SearchTweets} />
          <Route path="/api/random-tweets" exact component={RandomTweet} />
          <Route path="/" exact component={Homepage} />
        </main>
        <footer>
          <Footer />
        </footer>
      </>
    );
  }
}

export default Tweets;
