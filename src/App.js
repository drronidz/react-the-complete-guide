import React from "react";
import './App.css';

import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/new-expense/NewExpense";


function App() {
    const expenses = [
        {id: 'e1', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28)},
        {id: 'e2', title: 'New Desk (Wooden)', amount: 450, date: new Date(2021, 5, 12)},
        {id: 'e3', title: 'Toilet Paper', amount: 94.12, date: new Date(2021, 7, 14)}
    ]

    const addExpenseHandler = expense => {
        console.log('In App.js')
        console.log(expense)
    }

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses items={expenses}/>
        </div>
    );
}

export default App;
