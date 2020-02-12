import React from "react";
import classes from "./logo.module.css";
import myLogo from "../../assets/images/burger-logo.png";

const logo = () => (
  <div className={classes.Logo}>
    <img src={myLogo} alt="myLogo"></img>
  </div>
);

export default logo;
