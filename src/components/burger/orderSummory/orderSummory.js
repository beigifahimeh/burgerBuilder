import React, { Component } from "react";
import Button from "../../UI/Button/Button";
import Aux from "../../../hoc/Aux";

class OrderSummary extends Component {
  // componentWillUpdate() {
  //   console.log("component did update");
  // }
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
          {this.props.ingredients[igKey]}
        </li>
      );
    });
    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>Continue to Checkout?</p>
        <p>
          <strong>total price : {this.props.price}</strong>
        </p>
        <Button btnType="Danger" clicked={this.props.cancelHandler}>
          Cancel
        </Button>
        <Button btnType="Success" clicked={this.props.continueHandler}>
          Continue?
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;
