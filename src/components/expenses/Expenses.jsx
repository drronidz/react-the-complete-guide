import React, {useState} from "react";
import './Expenses.css'

import ExpenseItem from "../expense-item/ExpenseItem";
import Card from "../../ui/card/Card";
import ExpensesFilter from "../expense-filter/ExpensesFilter";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020')

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear)
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    })

    let expensesContent = <p>No expenses found.</p>

    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map(expense =>
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />)
    }

    return (
        <Card className="expenses">
            <ExpensesFilter
                selectedYear={filteredYear}
                onChangeFilter={filterChangeHandler}
            />
            {/*{filteredExpenses.length === 0 && <p>No expenses found.</p>}*/}
            {expensesContent}
        </Card>
    )
}

export default Expenses