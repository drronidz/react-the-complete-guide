import React from "react";
import './App.css';

import Expenses from "./components/expenses/Expenses";


function App() {
    const expenses = [
        {id: 'e1', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28)},
        {id: 'e2', title: 'New Desk (Wooden)', amount: 450, date: new Date(2021, 5, 12)},
        {id: 'e3', title: 'Toilet Paper', amount: 94.12, date: new Date(2021, 7, 14)}
    ]
    return (
        <div>
            <h2>Let's get started!</h2>
            <Expenses items={expenses}/>
        </div>
    );
}

export default App;
