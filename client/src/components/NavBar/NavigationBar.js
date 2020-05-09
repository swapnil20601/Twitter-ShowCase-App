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
import "./Nav.css";

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
    <MDBNavbar
      style={{
        backgroundColor: "#6749DE",
        fontWeight: "bold",
        padding: "10px 10px 0px 10px",
      }}
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
            <MDBNavLink to="/" className={activePath === "/" ? "Color" : ""}>
              Home
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem
            active={activePath === "/search-tweets"}
            onClick={() => {
              setActivePath("/search-tweets");
            }}
          >
            <MDBNavLink
              to="/search-tweets"
              // to={{
              //   pathname: "/search-tweets",
              //   search: '?q=nasa&result_type=recent&count=1'
              // }}
              className={activePath === "/search-tweets" ? "Color" : ""}
            >
              Search Tweets
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem
            active={activePath === "/random-tweets"}
            onClick={() => {
              setActivePath("/random-tweets");
            }}
          >
            <MDBNavLink
              to="/random-tweets"
              className={activePath === "/random-tweets" ? "Color" : ""}
            >
              Random Tweets
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="#">
              <MDBIcon fab icon="twitter" size="2x" />
            </MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  );
};

export default NavBar;
