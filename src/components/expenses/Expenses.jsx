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

    return (
        <Card className="expenses">
            <ExpensesFilter
                selectedYear={filteredYear}
                onChangeFilter={filterChangeHandler}
            />
            {props.items.map(expense => <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />)}
        </Card>
    )
}

export default Expenses