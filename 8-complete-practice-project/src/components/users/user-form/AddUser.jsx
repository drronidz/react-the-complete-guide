import React, {useState, useRef} from "react";
import './AddUser.css'
import Button from "../../ui/button/Button";
import Card from "../../ui/card/Card";
import ErrorModal from "../../ui/error-modal/ErrorModal";
import Wrapper from "../../ui/helpers/wrapper/Wrapper";


const AddUser = (props) => {
    const nameInputRef = useRef()
    const ageInputRef = useRef()

    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredAge, setEnteredAge] = useState('')
    const [error, setError] = useState()

    const addUserHandler = (event) => {
        event.preventDefault()
        // Using useRef Hook :
        console.log(nameInputRef.current.value)
        console.log(ageInputRef.current.value)
        const submittedName = nameInputRef.current.value
        const submittedAge = ageInputRef.current.value

        // Validating Fields
        if (submittedName.trim().length === 0 || submittedAge.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter valid name and age (non-empty values).'
            })
            return
        }
        if (+submittedAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter valid age (> 0).'
            })
            return
        }
        console.log(submittedName, submittedAge)
        props.onAddUser(submittedName, submittedAge)
        // Resetting Fields
        nameInputRef.current.value = ''
        ageInputRef.current.value = ''
        // setEnteredUsername('')
        // setEnteredAge('')
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
        <Wrapper>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
            <Card className="input">
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        // value={enteredUsername}
                        // onChange={usernameChangeHandler}
                        ref={nameInputRef}
                    />
                    <label htmlFor="age">Age (Years)</label>
                    <input
                        id="age"
                        type="number"
                        // value={enteredAge}
                        // onChange={ageChangeHandler}
                        ref={ageInputRef}
                    />
                    <Button type="submit">Add user</Button>
                </form>
            </Card>
        </Wrapper>
    )
}

export default AddUser