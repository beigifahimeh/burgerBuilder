import React from "react";
import classes from "./order.module.css";

const order = props => {
  const ingredients = [];
  for (let ingredientsName in props.ingredients) {
    ingredients.push({
      name: ingredientsName,
      amount: [props.ingredients[ingredientsName]]
    });
    console.log(ingredients);
  }
  const ingredientOutput = ingredients.map(ig => {
    return (
      <span
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "0 8px",
          border: "1px solid #ccc",
          padding: "5px"
        }}
        key={ig.name}
      >
        {ig.name} ({ig.amount})
      </span>
    );
  });

  return (
    <div className={classes.order}>
      <p>ingredients:{ingredientOutput}</p>
      <p>
        price:<strong> USD:{props.price}</strong>
      </p>
    </div>
  );
};

export default order;
