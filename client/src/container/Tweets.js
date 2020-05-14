import React, { Component } from "react";
import { Route } from "react-router-dom";
import Homepage from "../components/Homepage/Homepage";
import SearchTweets from "./SearchTweets/SearchTweets";
import RandomTweet from "../components/RandomTweet/RandomTweet";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import { MDBContainer } from "mdbreact";

class Tweets extends Component {
  render() {
    return (
      <>
        <header>
          <NavBar />
        </header>
        <main>
          <MDBContainer fluid>
            <Route path="/" exact component={Homepage} />
            <Route path="/search-tweets" exact component={SearchTweets} />
            <Route path="/random-tweets" exact component={RandomTweet} />
          </MDBContainer>
        </main>
        <footer>
          <Footer />
        </footer>
      </>
    );
  }
}

export default Tweets;
