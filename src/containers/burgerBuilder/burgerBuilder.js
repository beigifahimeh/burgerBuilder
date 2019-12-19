import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/burger/burger";
import BuildControls from "../../components/burger/buildControls/buildControls";
import Modal from "../../components/UI/modal/modal";
import OrderSummary from "../../components/burger/orderSummory/orderSummory";

const priceIngredient = {
  salad: 0.8,
  bacon: 0.7,
  meat: 1.5,
  cheese: 0.6
};

class burgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      meat: 0,
      cheese: 0
    },
    totalPrice: 4,
    purchasable: false,
    purchasing: false
  };
  updatePurchasable = ingredients => {
    const sum = Object.keys(ingredients)
      .map(ingkey => {
        return ingredients[ingkey];
      })
      .reduce((sum, nex) => {
        return sum + nex;
      }, 0);
    this.setState({ purchasable: sum > 0 });
  };

  addIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    const updateCount = oldCount + 1;
    const updateIngredient = {
      ...this.state.ingredients
    };
    updateIngredient[type] = updateCount;
    const oldPrice = this.state.totalPrice;
    const updatedPrice = priceIngredient[type] + oldPrice;
    this.setState({ totalPrice: updatedPrice, ingredients: updateIngredient });
    this.updatePurchasable(updateIngredient);
  };
  removeIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updateCount = oldCount - 1;
    const updateIngredient = {
      ...this.state.ingredients
    };
    updateIngredient[type] = updateCount;
    const oldPrice = this.state.totalPrice;
    const updatedPrice = priceIngredient[type] - oldPrice;
    this.setState({ totalPrice: updatedPrice, ingredients: updateIngredient });
    this.updatePurchasable(updateIngredient);
  };

  purchasingHandler = () => {
    this.setState({ purchasing: true });
  };
  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    // {salad: true, meat: false, ...}
    return (
      <Aux>
        <Modal show={this.state.purchasing}>
          <OrderSummary ingredients={this.state.ingredients} />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdd={this.addIngredientHandler}
          ingredientDeduction={this.removeIngredientHandler}
          disabled={disabledInfo}
          ordered={this.purchasingHandler}
          purchasable={this.state.purchasable}
          price={this.state.totalPrice}
        />
      </Aux>
    );
  }
}

export default burgerBuilder;
