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
  MDBPopover,
  MDBPopoverBody,
  MDBPopoverHeader,
  MDBView,
  MDBCardImage,
  MDBContainer,
  MDBFormInline,
  MDBAnimation,
} from "mdbreact";
import "./RandomTweet.css";
import jeffBezos from "../../images/jeff-bezos.jpg";
import sachin from "../../images/sachin.jpeg";
import timCook from "../../images/tim-cook.jpg";
import sundarPichai from "../../images/sundar_pichai.jpg";
import billgates from "../../images/billgates.jpg";
import PopOver from "../Popover/Popover";

const randomTweet = () => {
  return (
    <div className="random">
      <MDBView className="random">
        <MDBMask className="d-flex justify-content-center align-items-center gradient">
          <MDBCard className="content">
            <h2 className="h2-responsive text-center">
              <strong>
                Click On Your Favorite Personality To See Their Popular Tweet
              </strong>
            </h2>
            <br />
            <div className="card-deck">
            <PopOver>
                <div className="card border-dark mb-3">
                  <img
                    className="card-img-top"
                    src={jeffBezos}
                    alt="CEO of Amazon"
                  />
                  <div className="card-body text-dark">
                    <p className="card-title title-style">Jeff Bezos</p>
                    <p className="text-style">Founder and CEO Of Amazon</p>
                  </div>
                </div>
                </PopOver>
              <div className="card border-dark mb-3">
                <img className="card-img-top" src={sachin} alt="God of Cricket" />
                <div className="card-body text-dark">
                  <p className="card-title title-style">Sachin Tendulkar</p>
                  <p className="text-style">God Of Cricket</p>
                </div>
              </div>
              <div className="card border-dark mb-3">
                <img
                  className="card-img-top"
                  src={billgates}
                  alt="Founder of Microsoft"
                />
                <div className="card-body text-dark">
                  <p className="card-title title-style">William Henry Gates III</p>
                  <p
                    className="card-text text-dark"
                    style={{
                      fontStyle: "italic",
                      fontSize: "16px",
                      textAlign: "center",
                    }}
                  >
                    Best Known As Billgates
                  </p>
                  <p className="text-style">Co-founder Of Microsoft Corporation</p>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-sm-4 ml-4 mr-4">
                <div className="card border-dark mb-3">
                  <img className="card-img-top" src={timCook} alt="CEO Of Apple" />
                  <div className="card-body text-dark">
                    <p className="card-title title-style">Tim Cook</p>
                    <p className="text-style">CEO Of Apple Inc.</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 ml-4 mr-4">
                <div className="card border-dark mb-3">
                  <img
                    className="card-img-top"
                    src={sundarPichai}
                    alt="CEO Of Google"
                  />
                  <div className="card-body text-dark">
                    <p className="card-title title-style">Sundar Pichai</p>
                    <p className="text-style">CEO Of Alphabet and Google</p>
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
