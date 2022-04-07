import React, {useContext} from "react";

import classes from './MealItem.module.css'
import MealItemForm from "../meal-item-form/MealItemForm";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
    const cartContext = useContext(CartContext)

    const price = `$${props.price.toFixed(2)}`

    const addToCartHandler = amount => {
        cartContext.addItemToCart({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        })
    }

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemForm onAddToCart={addToCartHandler}/>
            </div>
        </li>
    )
}

export default MealItem