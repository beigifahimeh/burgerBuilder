import React, { Component } from "react";
import CheckOutSummary from "../../components/CheckoutSummary/CheckOutsummary";
import { Route, Redirect } from "react-router-dom";
import Contactdata from "../Contactdata/Contactdata";
import { connect } from "react-redux";
class Checkout extends Component {
  // state = {
  //   ingredients: null, //redux
  //   totalPrice: 0 //redux
  // };

  // componentWillMount() {
  //   console.log(this.props);
  //   const searchParams = new URLSearchParams(this.props.location.search);
  //   const ingredients = {};
  //   let Price = 0;
  //   for (let pair of searchParams) {
  //     if (pair[0] == "Price") {
  //       Price = pair[1];
  //     } else {
  //       ingredients[pair[0]] = Number(pair[1]);
  //     }
  //   }

  //   this.setState({ ingredients: ingredients, totalPrice: Price });
  // }

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinuedHandler = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  render() {
    let summary = <Redirect to="/" />;
    if (this.props.ing) {
      const purchasedRedirect = this.props.purchasing ? (
        <Redirect to="/" />
      ) : null;
      summary = (
        <div>
          {purchasedRedirect}
          <CheckOutSummary
            ingredients={this.props.ing}
            checkoutCancelled={this.checkoutCancelledHandler}
            checkoutContinued={this.checkoutContinuedHandler}
          />
          <Route
            path={this.props.match.path + "/Contact-data"}
            component={Contactdata}
          />
        </div>
      );
    }
    return summary;
  }
}
const mapStateToProps = state => {
  return {
    ing: state.burgerBuilder.ingredients,
    purchasing: state.order.purchasing
  };
};

export default connect(mapStateToProps)(Checkout);
