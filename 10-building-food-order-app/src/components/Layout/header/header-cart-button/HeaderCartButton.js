import React, {useContext, useEffect, useState} from "react";
import CartContext from "../../../../store/cart-context";

import classes from './HeaderCartButton.module.css'
import CartIcon from "../../../Cart/cart-icon/CartIcon";

const HeaderCartButton = props => {
    const cartContext = useContext(CartContext)
    const {items} = cartContext
    const [btnIsBumped, setBtnIsBumped] = useState(false)

    const numberOfCartItems = items.reduce((currentNumber, item) => {
        return currentNumber + item.amount
    }, 0)

    useEffect(() => {
        if (items.length === 0) {
            return
        }
        setBtnIsBumped(true)

        const timer = setTimeout(() => {
            setBtnIsBumped(false)
        }, 300)

        return () => {
            clearTimeout(timer)
        }
    }, [items])

    const btnClasses = `${classes.button} ${btnIsBumped ? classes.bump: ''}`

    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    )
}

export default HeaderCartButton