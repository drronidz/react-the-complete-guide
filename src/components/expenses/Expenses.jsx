import React, {useState} from "react";
import './Expenses.css'

import ExpenseItem from "../expense-item/ExpenseItem";
import Card from "../../ui/card/Card";
import ExpensesFilter from "../expense-filter/ExpensesFilter";
import ExpensesList from "../expenses-list/ExpensesList";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020')

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear)
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    })

    return (
        <Card className="expenses">
            <ExpensesFilter
                selectedYear={filteredYear}
                onChangeFilter={filterChangeHandler}
            />
            {/*{filteredExpenses.length === 0 && <p>No expenses found.</p>}*/}
            <ExpensesList items={filteredExpenses}/>
        </Card>
    )
}

export default Expenses