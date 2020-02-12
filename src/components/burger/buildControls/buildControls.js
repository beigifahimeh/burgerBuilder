import React from "react";
import classes from "./buildControls.module.css";
import BuildControl from "./buildControl/buildControl";

const controls = [
  { label: "salad", type: "salad" },
  { label: "bacon", type: "bacon" },
  { label: "cheese", type: "cheese" },
  { label: "meat", type: "meat" }
];

const buildControls = props => (
  <div className={classes.BuildControls}>
    <p>
      current price :<strong>{props.price.toFixed(2)}</strong>
    </p>
    {controls.map(ele => (
      <BuildControl
        key={ele.label}
        label={ele.label}
        added={() => props.ingredientAdd(ele.type)}
        remove={() => props.ingredientDeduction(ele.type)}
        disabled={props.disabled[ele.type]}
      />
    ))}
    <button
      className={classes.OrderButton}
      disabled={!props.purchasable}
      onClick={props.ordered}
    >
      {props.isAuthenticated ? "ORDER NOW" : "SIGN UP TO ORDER"}
    </button>
  </div>
);
export default buildControls;
