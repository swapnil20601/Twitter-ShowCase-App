import React, { Component } from 'react'
import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBFormInline,
  MDBAnimation,
} from "mdbreact";
import axios from 'axios';
import "./Search.css";

class SearchTweets extends Component {
  // componentDidMount () {
  //   axios.get("https://jsonplaceholder.typicode.com/posts").then(
  //     response => {
  //       console.log(response)
  //     }
  //   )
  // }

  render() {
    return (
      <div className="search">
        <MDBView className="search">
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBCard className="content">
              <MDBCardBody className="white-text">
                <h2 className="h2-responsive text-center">
                  Search Your Favourite Personality Or Tweets
                </h2>
                <br></br>
                <MDBFormInline className="responsive md-form justify-content-center">
                  <input
                    className="form-control mr-sm-2 white-text col-5"
                    type="text"
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
  };
}

export default SearchTweets;
