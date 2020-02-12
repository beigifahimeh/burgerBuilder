import React, { Component } from "react";
import { connect } from "react-redux";
import Aux from "../../hoc/Aux";
import Burger from "../../components/burger/burger";
import BuildControls from "../../components/burger/buildControls/buildControls";
import Modal from "../../components/UI/modal/modal";
import OrderSummary from "../../components/burger/orderSummory/orderSummory";
import axios from "../../axios-orders";
import Spinner from "../../components/UI/spinner/spinner";
import WithErrorHandler from "../../hoc/WithErrorHandler/WithErrorHandler";
import * as actions from "../../store/actions/index";

// const priceIngredient = {
//   salad: 0.8,
//   bacon: 0.7,
//   meat: 1.5,
//   cheese: 0.6
// };//reducer

class BurgerBuilder extends Component {
  state = {
    // ingredients: null, //redux
    // totalPrice: 4, //redux
    // purchasable: false, //local UI state
    purchasing: false //local UI state
    // loading: false, //local UI state
    // error: false //local UI state
  };
  componentDidMount() {
    this.props.onInitIngredients();

    // axios
    //   .get("https://react-my-burger-48bef.firebaseio.com/ingredients.json")
    //   .then(response => this.setState({ ingredients: response.data }))
    //   .catch(error => {
    //     this.setState({ error: true });
    //   });
  }
  updatePurchasable = ingredients => {
    const sum = Object.keys(ingredients)
      .map(ingkey => {
        return ingredients[ingkey];
      })
      .reduce((sum, nex) => {
        return sum + nex;
      }, 0);
    return sum > 0;
  };

  // addIngredientHandler = type => {
  //   const oldCount = this.state.ingredients[type];
  //   const updateCount = oldCount + 1;
  //   const updateIngredient = {
  //     ...this.state.ingredients
  //   };
  //   updateIngredient[type] = updateCount;
  //   const oldPrice = this.state.totalPrice;
  //   const updatedPrice = priceIngredient[type] + oldPrice;
  //   this.setState({ totalPrice: updatedPrice, ingredients: updateIngredient });
  //   this.updatePurchasable(updateIngredient);
  // };
  // removeIngredientHandler = type => {
  //   const oldCount = this.state.ingredients[type];
  //   if (oldCount <= 0) {
  //     return;
  //   }
  //   const updateCount = oldCount - 1;
  //   const updateIngredient = {
  //     ...this.state.ingredients
  //   };
  //   updateIngredient[type] = updateCount;
  //   const oldPrice = this.state.totalPrice;
  //   const updatedPrice = priceIngredient[type] - oldPrice;
  //   this.setState({ totalPrice: updatedPrice, ingredients: updateIngredient });
  //   this.updatePurchasable(updateIngredient);
  // };

  purchasingHandler = () => {
    if (this.props.isAuthenticated) {
      this.setState({ purchasing: true });
    } else {
      this.props.onSetAuthRedirect("/checkout");
      this.props.history.push("/Auth");
    }
  };
  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };
  purchaseContinueHandler = () => {
    // const queryParams = [];
    // for (let i in this.state.ingredients) {
    //   queryParams.push(
    //     encodeURIComponent(i) +
    //       "=" +
    //       encodeURIComponent(this.state.ingredients[i])
    //   );
    //   queryParams.push("Price=" + this.props.totalPrice);
    // }
    // const queryString = queryParams.join("&");
    this.props.history.push("/checkout");
    this.props.onInitPurchase();
  };

  render() {
    const disabledInfo = {
      ...this.props.ing
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    let orderSummary = null;
    let burger = this.props.error ? (
      <p>ingredient cannot be loaded</p>
    ) : (
      <Spinner />
    );
    if (this.props.ing) {
      burger = (
        <Aux>
          <Burger ingredients={this.props.ing} />
          <BuildControls
            isAuthenticated={this.props.isAuthenticated}
            ingredientAdd={this.props.onIngredientAdded}
            ingredientDeduction={this.props.onIngredientRemoved}
            disabled={disabledInfo}
            ordered={this.purchasingHandler}
            purchasable={this.updatePurchasable(this.props.ing)}
            price={this.props.totalPrice}
          />
        </Aux>
      );
      orderSummary = (
        <OrderSummary
          cancelHandler={this.purchaseCancelHandler}
          continueHandler={this.purchaseContinueHandler}
          ingredients={this.props.ing}
          price={this.props.totalPrice}
        />
      );
    }
    // if (this.state.loading) {
    //   orderSummary = <Spinner />;
    // }

    // {salad: true, meat: false, ...}
    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}
const mapStateToProps = state => {
  return {
    ing: state.burgerBuilder.ingredients,
    totalPrice: state.burgerBuilder.totalPrice,
    error: state.burgerBuilder.error,
    isAuthenticated: state.auth.tokenId != null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIngredientAdded: ingName => dispatch(actions.addIngredients(ingName)),
    onIngredientRemoved: ingName => dispatch(actions.removeIngredient(ingName)),
    onInitIngredients: () => dispatch(actions.initIngredients()),
    onInitPurchase: () => dispatch(actions.purchaseInit()),
    onSetAuthRedirect: path => dispatch(actions.authRedirectPath(path))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithErrorHandler(BurgerBuilder, axios));
