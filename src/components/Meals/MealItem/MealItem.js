import React, { useContext } from "react";
import CartContext from "../../../store/cart-Context";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.meal}>
      
        <img
          src={props.image}
          style={{ objectFit: "contain", height: "100px" }}
        />
        <div>
          <h3>{props.name}</h3>
          <div className={classes.description}>{props.description}</div>
          <div className={classes.price}>{price}</div>
        <MealItemForm onAddToCart={addToCartHandler} />

        </div>
      

      
      
    </li>
  );
};
export default MealItem;
