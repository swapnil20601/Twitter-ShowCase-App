import React from "react";
import NavigationItems from "./NavigationItems/NavigationItems";

const NavigationBar = () => {
  const navLinks = [
    {
      text: "Home",
      path: "/",
      icon: ""
    },
    {
      text: "Search Tweets",
      path: "/search-tweets",
    },
    {
      text: "Random Tweets",
      path: "/random-tweets",
    },
  ];
  return (
    <NavigationItems
      navLinks={navLinks}
      background="#391CAC"
      hoverBackground="#6049BC"
      linkColor="white"
    />
  );
};

export default NavigationBar;
