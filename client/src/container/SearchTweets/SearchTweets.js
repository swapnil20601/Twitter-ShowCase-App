//import axios from "axios";
import axios from '../../axios';
import { MDBBtn, MDBCard, MDBCardBody, MDBFormInline, MDBMask, MDBView } from "mdbreact";
import React, { Component } from "react";
import "./Search.css";

class SearchTweets extends Component {
  state = {
    posts: [],
    searchTweets: '',
    error: false
  }

  componentDidMount() {
    console.log('Router props', this.props)
    axios.get("/posts").then((response) => {
      this.setState({posts: response.data})
      console.log(response);
    })
    .catch(error => {
      //console.log(error);
      this.setState({error: true})
    });
  }

  onChangeHandler = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  onSubmitHandler = (event) => {
    event.preventDefault();
    //send request with result_type and count
    this.setState({searchTweets: ''})
    event.target.reset();
  }

  render() {
    // let posts = <p style={{textAlign: "center"}}>Something went wrong!!</p>
    // if(!this.state.error) {
    //   then only show the tweets
    // }
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
                <MDBFormInline className="responsive md-form justify-content-center" onSubmit={this.onSubmitHandler}>
                  <input
                    className="form-control mr-sm-2 white-text col-5"
                    type="text"
                    name="searchTweets"
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
  }
}

export default SearchTweets;
