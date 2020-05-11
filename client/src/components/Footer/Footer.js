import { MDBContainer, MDBFooter } from "mdbreact";
import React from "react";

const footer = () => {
  return (
    <MDBFooter style={{ backgroundColor: "#6749DE" }}>
      <div className="footer-copyright text-center py-2">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://www.mdbootstrap.com">
            {" "}
            Swapnil's Twitter ShowCase App
          </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default footer;
