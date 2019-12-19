import React from "react";
import BurgerIngredient from "./burgerIngredient/burgerIngredient";
import classes from "./burger.module.css";
import { array } from "prop-types";

const burger = props => {
  let transformingIngredient = Object.keys(props.ingredients)
    .map(ingKey => {
      return [...Array(props.ingredients[ingKey])].map((_, index) => {
        return (
          <BurgerIngredient
            key={ingKey + index}
            type={ingKey}
          ></BurgerIngredient>
        );
      });
    })
    .reduce((pre, next) => {
      return pre.concat(next);
    }, []);
  console.log(transformingIngredient);
  if (transformingIngredient.length === 0) {
    transformingIngredient = <p>please start adding ingredients</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformingIngredient}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
