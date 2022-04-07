import React, {useContext} from "react";
import classes from './Cart.module.css'
import Modal from "../../UI/modal/Modal";
import CartContext from "../../../store/cart-context";
import CartItem from "../cart-item/CartItem";



const Cart = props =>{
    const cartContext = useContext(CartContext)

    const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`
    const hasItems = cartContext.items.length > 0

    const cartItemAddHandler = item => {
        cartContext.addItemToCart({
            ...item,
            amount: 1
        })
    }

    const cartItemRemoveHandler = id => {
        cartContext.removeItemFromCart(id)
    }

    const cartItems = (
        <ul className={classes['cart-items']}>
            {cartContext.items.map((item) =>
                <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onAddItemToCart={cartItemAddHandler.bind(null, item)}
                    onRemoveItemFromCart={cartItemRemoveHandler.bind(null, item.id)}
                />)}
        </ul>
    )

    return (
        <Modal onClose={props.onHideCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    )
}

export default Cart