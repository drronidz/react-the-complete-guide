import React, {Fragment, useState} from "react";
import Header from "./components/Layout/header/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/cart/Cart";


function App() {
    const [cartIsVisible, setCartIsVisible] = useState(false)

    const showCartHandler = () => {
        setCartIsVisible(true)
    }

    const hideCartHandler = () => {
        setCartIsVisible(false)
    }

    return (
        <Fragment>
            {cartIsVisible && <Cart onHideCart={hideCartHandler}/>}
            <Header onShowCart={showCartHandler}/>
            <main>
                <Meals/>
            </main>
        </Fragment>
    );
}

export default App;
