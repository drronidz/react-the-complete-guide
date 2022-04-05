import React, {useState} from "react";
import './AddUser.css'
import Button from "../../ui/button/Button";
import Card from "../../ui/card/Card";
import ErrorModal from "../../ui/error-modal/ErrorModal";


const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredAge, setEnteredAge] = useState('')
    const [error, setError] = useState()

    const addUserHandler = (event) => {
        event.preventDefault()
        // Validating Fields
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter valid name and age (non-empty values).'
            })
            return
        }
        if (+enteredAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter valid age (> 0).'
            })
            return
        }
        console.log(enteredUsername, enteredAge)
        props.onAddUser(enteredUsername, enteredAge)
        // Resetting Fields
        setEnteredUsername('')
        setEnteredAge('')
    }

    const usernameChangeHandler = event => {
        setEnteredUsername(event.target.value)
    }

    const ageChangeHandler = event => {
        setEnteredAge(event.target.value)
    }

    const errorHandler = () => {
        setError(null)
    }

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
            <Card className="input">
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler}/>
                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}/>
                    <Button type="submit">Add user</Button>
                </form>
            </Card>
        </div>
    )
}

export default AddUser