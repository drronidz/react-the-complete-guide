import React from "react";

import './NewExpense.css'
import ExpenseForm from "../expense-form/ExpenseForm";

const NewExpense = () => {
    return (
        <div className="new-expense">
            <ExpenseForm/>
        </div>)
}

export default NewExpense