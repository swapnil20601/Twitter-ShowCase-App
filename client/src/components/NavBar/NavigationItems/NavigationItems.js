import {
  MDBIcon,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
} from "mdbreact";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavItems.css";

const NavigationItems = ({
  navLinks,
  background,
  hoverBackground,
  linkColor,
}) => {
  const [hoverIndex, setHoverIndex] = useState(-1);
  const [navOpen, setNavOpen] = useState(false);

  let home = <MDBIcon icon="home" />;
  return (
    <div className="Navbar">
      <nav style={{ background }}>
        <ul style={{ background }} className={navOpen ? "active" : ""}>
          <div onClick={() => setNavOpen(!navOpen)} style={{ color: "white" }}>
            <MDBIcon icon="bars" size="2x" />
          </div>
          {navLinks.map((link, index) => (
            <li
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(-1)}
              style={{
                background: hoverIndex === index ? hoverBackground : "",
              }}
            >
              <NavLink to={link.path} style={{ color: linkColor }}>
                {link.path === "/" ? (
                  <span style={{ fontSize: "20px", marginRight: "5px" }}>
                    {home} Home
                  </span>
                ) : (
                  link.text
                )}
              </NavLink>
            </li>
          ))}
          <MDBNavbarNav right>
            <MDBNavItem className="Icon">
              <MDBNavLink to="#">
                <MDBIcon fab icon="twitter" size="2x" />
              </MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationItems;
