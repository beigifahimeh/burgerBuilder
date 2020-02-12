import classes from "./Toolbar.module.css";
import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../navigationItems/navigationitems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const toolbar = props => {
  return (
    <header className={classes.Toolbar}>
      <DrawerToggle clicked={props.DrawerToggleClick} />
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav className={classes.desktopOnly}>
        <NavigationItems isAuthenticated={props.isAuth} />
      </nav>
    </header>
  );
};

export default toolbar;
