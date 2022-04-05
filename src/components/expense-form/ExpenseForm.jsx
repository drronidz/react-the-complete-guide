import React, {useState} from "react";
import styled from 'styled-components'

import './ExpenseForm.css'

const FormControl = styled.div`
& label {
    font-weight: bold;
    margin-bottom: 0.5rem;
    display: block;
    color: ${ props => (props.invalid ? 'red' : 'black') };
}

& input {
    font: inherit;
    padding: 0.5rem;
    border-radius: 6px;
    border-width: ${props => props.invalid ? '3px' : '1px'};
    border-color: ${props => props.invalid ? 'red' : '#ccc'};
    border-style: solid;
    background: ${props => props.invalid ? '#ffd7d7' : 'white'};
    width: 20rem;
    max-width: 100%;
}
`

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [isValid, setIsValid] = useState(true)
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    // const [userInput, setUserInput] = useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:''
    // })

    const titleChangeHandler = (event) => {
        console.log(event)
        console.log("Title Changed!")
        console.log(event.target.value)
        if (event.target.value.trim().length > 0) {
            setIsValid(true)
        }
        setEnteredTitle(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // })

        /* If the state depends on the previous state*/
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         enteredTitle: event.target.value
        //     }
        // })
    }

    const amountChangeHandler = (event) => {
        console.log(event)
        console.log("Amount Changed!")
        console.log(event.target.value)
        setEnteredAmount(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // })

        /* If the state depends on the previous state*/
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         enteredAmount: event.target.value
        //     }
        // })
    }

    const dateChangeHandler = (event) => {
        console.log(event)
        console.log("Amount Changed!")
        console.log(event.target.value)
        setEnteredDate(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // })

        /* If the state depends on the previous state*/
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         enteredDate: event.target.value
        //     }
        // })
    }

    const submitFormHandler = (event) => {
        event.preventDefault()

        const expenseDATA = {
            id: Math.random().toString(),
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        console.log(expenseDATA)

        if (enteredTitle.trim().length === 0) {
            setIsValid(false)
            return
        }

        props.onSaveExpenseDATA(expenseDATA)

        // Resetting input fields ...
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    }

    return (
        <form onSubmit={submitFormHandler}>
            <div className="new-expense__controls">
                <FormControl invalid={!isValid}>
                    <label>Title</label>
                    <input
                        type="text"
                        value={enteredTitle}
                        onChange={titleChangeHandler}/>
                </FormControl>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        value={enteredAmount}
                        min="0.01"
                        step="0.01"
                        onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        value={enteredDate}
                        min="2019-01-01"
                        max="2022-12-31"
                        onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm