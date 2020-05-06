import React from "react";
import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBIcon,
  MDBInput,
  MDBBtn,
  MDBView,
  MDBCardImage,
  MDBContainer,
  MDBFormInline,
  MDBAnimation,
} from "mdbreact";
import "./RandomTweet.css";
import jeff from '../../images/jeff-bezos.jpg';

const randomTweet = () => {
  return (
    <div className="random">
      <MDBView className="random">
        <MDBMask className="d-flex justify-content-center align-items-center gradient">
          <MDBCard className="content">
            <h2 className="h2-responsive text-center">
              <strong>Click On Your Favorite Personality To See Their Popular Tweet</strong>
            </h2>
            <br />
            {/* <div class='row'>
              <div class="col-sm-4">
              <div class="card">
                <img class="card-img-top" src="..." alt="Card image cap" />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>
              </div> 
              <div class="card">
                <img class="card-img-top" src="..." alt="Card image cap" />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>
              </div> 
              </div>
              </div> */}

            <div class="card-deck">
              <div class="card border-dark mb-3">
                <img class="card-img-top" src={jeff} alt="CEO of Amazon" />
                <div class="card-body text-dark">
                  <h4 class="card-title" style={{fontWeight:"bold", textAlign: "center", marginBottom: "0px"}}>Jeff Bezos</h4>                  
                </div>
              </div>
              <div class="card">
                <img class="card-img-top" src="..." alt="Card image cap" />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>
              </div>
              <div class="card">
                <img class="card-img-top" src="..." alt="Card image cap" />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>
              </div>
            </div>

            <div class="row mt-4">
              <div class="col-sm-4 ml-4 mr-4">
                <div class="card">
                  <img class="card-img-top" src="..." alt="Card image cap" />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-sm-4 ml-4 mr-4">
                <div class="card">
                  <img class="card-img-top" src="..." alt="Card image cap" />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </MDBCard>
        </MDBMask>
      </MDBView>
    </div>
  );
};

export default randomTweet;
