import React, { Component } from "react";
import Homepage from "../components/Homepage/Homepage";
import SearchTweets from "../components/SearchTweets/SearchTweets";
import NavBar from "../components/NavBar/NavigationBar";
import Footer from "../components/Footer/Footer";

class Tweets extends Component {
  render() {
    return (
      <>
        <header className="navbar sticky-top">
          <NavBar />
        </header>
        <main className="mt-4">
          {/* <Homepage />  */}
          <SearchTweets />
        </main>
        <footer>
          <Footer />
        </footer>
      </>
    );
  }
}

export default Tweets;
