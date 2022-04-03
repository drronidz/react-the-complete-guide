import React from "react";
import './ExpenseItem.css'
import ExpenseDate from "../expense-date/ExpenseDate";
import Card from "../../ui/card/Card";

const ExpenseItem = (props) => {
    let title = props.title
    const clickHandler = () => {
        title = 'Updated!'
        console.log('Clicked!!!')
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    )
}

export default ExpenseItem