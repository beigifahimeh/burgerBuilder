import React from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./navigationItem/navigationItem";

const navigationItems = props => (
  <ul className={classes.navigationitems}>
    <NavigationItem link="/" exact>
      Burger Builder
    </NavigationItem>
    {props.isAuthenticated ? (
      <NavigationItem link="/Orders">Orders</NavigationItem>
    ) : null}
    {props.isAuthenticated ? (
      <NavigationItem link="/logout">Logout</NavigationItem>
    ) : (
      <NavigationItem link="/Auth">Authenticate</NavigationItem>
    )}
  </ul>
);

export default navigationItems;
