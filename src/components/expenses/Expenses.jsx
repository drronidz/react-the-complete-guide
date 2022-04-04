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
            <ExpenseItem
                title={props.items[0].title}
                amount={props.items[0].amount}
                date={props.items[0].date}
            />
            <ExpenseItem
                title={props.items[1].title}
                amount={props.items[1].amount}
                date={props.items[1].date}
            />
            <ExpenseItem
                title={props.items[2].title}
                amount={props.items[2].amount}
                date={props.items[2].date}
            />
        </Card>
    )
}

export default Expenses