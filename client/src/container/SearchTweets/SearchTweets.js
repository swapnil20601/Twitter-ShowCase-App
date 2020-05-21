//import axios from "axios";
import axios from "../../axios";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBFormInline,
  MDBMask,
  MDBView,
} from "mdbreact";
import React, { Component } from "react";
import "./Search.css";

class SearchTweets extends Component {
  state = {
    tweets: [],
    searchTweet: "",
    error: false,
  };

  onChangeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmitHandler = (event) => {
    event.preventDefault();

    const path = {
      pathname: this.props.match.path,
      search: `?q=${
        this.state.searchTweet
      }&result_type=popular&lang=en&count=${Math.floor(
        Math.random() * (8 - 5 + 1) + 5
      )}`,
    };

    this.props.history.push(path);

    //send request with result_type and count
    // axios
    //   .get("/search-tweets")
    //   .then((response) => {
    //     this.setState({ tweets: response.data });
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     //console.log(error);
    //     this.setState({ error: true });
    //   });

    this.setState({ searchTweet: "" });
    event.target.reset();

    // {
    //   params: {
    //     q: this.state.searchTweet,
    //     result_type: 'popular',
    //     count: '5',
    //     lang: 'en'
    //   }
    // }
  };

  render() {
    let displayTweets = null;

    if (!this.state.error && this.props.match.url.includes("/search-tweets")) {
      displayTweets = (
        <div className="search">
          <MDBView className="search">
            <MDBMask className="d-flex justify-content-center align-items-center gradient">
              <MDBCard className="content">
                <MDBCardBody className="white-text">
                  <h2 className="h2-responsive text-center">
                    Search Your Favourite Personality Or Tweets
                  </h2>
                  <br></br>
                  <MDBFormInline
                    className="responsive md-form justify-content-center"
                    onSubmit={this.onSubmitHandler}
                  >
                    <input
                      className="form-control mr-sm-2 white-text col-5"
                      type="text"
                      name="searchTweet"
                      onChange={this.onChangeHandler}
                    />
                    <MDBBtn
                      gradient="aqua"
                      rounded
                      size="md"
                      type="submit"
                      className="black-text font-weight-bold"
                    >
                      <span style={{ fontSize: "15px" }}>Search</span>
                    </MDBBtn>
                  </MDBFormInline>
                </MDBCardBody>
              </MDBCard>
            </MDBMask>
          </MDBView>
        </div>
      );
    } else {
      displayTweets = (
        <p style={{ textAlign: "center", paddingTop: "70px" }}>
          Something went wrong while fetching Tweets!!
        </p>
      );
    }

    return <div>{displayTweets}</div>;
  }
}

export default SearchTweets;
