import React from "react";

import './NewExpense.css'
import ExpenseForm from "../expense-form/ExpenseForm";

const NewExpense = (props) => {

    const saveExpenseDATAHandler = (enteredExpenseDATA) => {
        console.log('In NewExpense.js')
        console.log(enteredExpenseDATA)
        props.onAddExpense(enteredExpenseDATA)
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseDATA={saveExpenseDATAHandler} />
        </div>)
}

export default NewExpense