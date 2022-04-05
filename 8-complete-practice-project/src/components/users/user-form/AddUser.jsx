import React, {useState} from "react";
import './AddUser.css'
import Button from "../../ui/button/Button";
import Card from "../../ui/card/Card";



const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredAge, setEnteredAge] = useState('')

    const addUserHandler = (event) => {
        event.preventDefault()
        // Validating Fields
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            return
        }
        if (+enteredAge < 1) {
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

    return (
        <Card className="input">
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler}/>
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}/>
                <Button type="submit">Add user</Button>
            </form>
        </Card>
    )
}

export default AddUser