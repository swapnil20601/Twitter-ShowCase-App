import {
  MDBCollapse,
  MDBLink,
  MDBIcon,
  MDBNavLink,
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBNavItem,
} from "mdbreact";
import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import classes from "./Nav.module.css";

const NavBar = () => {
  const [collapse, setCollapse] = useState(false);
  const [activePath, setActivePath] = useState("/");

  const toggleCollapseHandler = () => {
    setCollapse(!collapse);
  };

  if (activePath) {
    console.log("the path is ", activePath);
  }

  return (
    <Router>
        <MDBNavbar
        style={{ backgroundColor: "#6749DE", fontWeight: "bold", padding: '10px 10px 0px 10px'}}
          dark
          expand="md"
          scrolling
          fixed="top"
        >
          <MDBNavbarToggler onClick={toggleCollapseHandler} />
          <MDBCollapse isOpen={collapse} navbar>
            <MDBNavbarNav>
              <MDBNavItem
                active={activePath === "/"}
                onClick={() => {
                  setActivePath("/");
                }}
              >
                <MDBLink
                  to="/"
                  className={activePath === "/" ? classes.Color : ""}
                >
                  Home
                </MDBLink>
              </MDBNavItem>
              <MDBNavItem
                active={activePath === "/swapnil"}
                onClick={() => {
                  setActivePath("/swapnil");
                }}
              >
                <MDBLink
                  to="/swapnil"
                  className={activePath === "/swapnil" ? classes.Color : ""}
                >
                  Search Tweets
                </MDBLink>
              </MDBNavItem>
              <MDBNavItem
                active={activePath === "/swapnil/jadhav"}
                onClick={() => {
                  setActivePath("/swapnil/jadhav");
                }}
              >
                <MDBLink
                  to="/swapnil/jadhav"
                  className={
                    activePath === "/swapnil/jadhav" ? classes.Color : ""
                  }
                >
                  Random Tweets
                </MDBLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#">
                  <MDBIcon fab icon="twitter" size="2x" />
                </MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
    </Router>
  );
};

export default NavBar;
