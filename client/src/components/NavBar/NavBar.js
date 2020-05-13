import {
  MDBCollapse,
  MDBIcon,
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBNavItem,
  MDBNavLink,
} from "mdbreact";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Nav.css";

const NavBar = () => {
  let history = useHistory();
  const [collapse, setCollapse] = useState(false);
  const [activePath, setActivePath] = useState("/");

  useEffect(() => {
    history.replace({ pathname: "/" });
  }, [history]);

  const toggleCollapseHandler = () => {
    setCollapse(!collapse);
  };
  return (
    <div>
      <MDBNavbar
        style={{
          backgroundColor: "#6049BC",
          fontWeight: "bold",
          padding: "10px 10px 0px 10px",
        }}
        dark
        expand="md"
        scrolling
        fixed="top"
      >
        <MDBNavbarToggler
          style={{ paddingBottom: "10px" }}
          onClick={toggleCollapseHandler}
        />
        <MDBCollapse isOpen={collapse} navbar>
          <MDBNavbarNav>
            <MDBNavItem
              onClick={() => {
                setActivePath("/");
              }}
            >
              <MDBNavLink
                to="/"
                active={activePath === "/"}
                className={activePath === "/" ? "Color" : ""}
              >
                <MDBIcon
                  icon="home"
                  size="lg"
                  style={{ paddingRight: "5px" }}
                />
                Home
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem
              onClick={() => {
                setActivePath("/search-tweets");
              }}
            >
              <MDBNavLink
                to="/search-tweets"
                active={activePath === "/search-tweets"}
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
              onClick={() => {
                setActivePath("/random-tweets");
              }}
            >
              <MDBNavLink
                to="/random-tweets"
                className={activePath === "/random-tweets" ? "Color" : ""}
                active={activePath === "/random-tweets"}
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
    </div>
  );
};

export default NavBar;
