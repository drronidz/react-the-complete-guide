import React, {Fragment, useState} from "react";
import Header from "./components/Layout/header/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/cart/Cart";
import CartProvider from "./store/cart-provider";


function App() {
    const [cartIsVisible, setCartIsVisible] = useState(false)

    const showCartHandler = () => {
        setCartIsVisible(true)
    }

    const hideCartHandler = () => {
        setCartIsVisible(false)
    }

    return (
        <CartProvider>
            {cartIsVisible && <Cart onHideCart={hideCartHandler}/>}
            <Header onShowCart={showCartHandler}/>
            <main>
                <Meals/>
            </main>
        </CartProvider>
    );
}

export default App;
