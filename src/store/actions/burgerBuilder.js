import * as actionType from "./action";
import axios from "../../axios-orders";

export const addIngredients = name => {
  return {
    type: actionType.ADD_INGREDIENT,
    ingredientName: name
  };
};

export const removeIngredient = name => {
  return {
    type: actionType.REMOVE_INGREDIENT,
    ingredientName: name
  };
};
export const setIngredients = ingredients => {
  return {
    type: actionType.SET_INGREDIENTS,
    ingredients: ingredients
  };
};

export const fetchIngredientsFailed = () => {
  return {
    type: actionType.FETCH_INGREDIENTS_FAILED
  };
};

export const initIngredients = () => {
  return dispatch => {
    axios
      .get("https://react-my-burger-48bef.firebaseio.com/ingredients.json")
      .then(response => {
        dispatch(setIngredients(response.data));
      })
      .catch(error => {
        dispatch(fetchIngredientsFailed());
      });
  };
};
