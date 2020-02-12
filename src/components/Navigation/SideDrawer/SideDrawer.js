import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../navigationItems/navigationitems";
import classes from "./SideDrawer.module.css";
import Aux from "../../../hoc/Aux";
import Backdrop from "../../UI/backdrop/backdrop";

const sideDrawer = props => {
  let attachedClasses = [classes.SideDrawer, classes.close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.open];
  }
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")} onClick={props.closed}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems isAuthenticated={props.isAuth} />
        </nav>
      </div>
    </Aux>
  );
};
export default sideDrawer;
