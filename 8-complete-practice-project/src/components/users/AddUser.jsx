import React from "react";
import './AddUser.css'
import Card from "../ui/card/Card";
import Button from "../ui/button/Button";

const AddUser = (props) => {
    const addUserHandler = (event) => {
        event.preventDefault()
    }

    return (
        <Card className="input">
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text"/>
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number"/>
                <Button type="submit">Add user</Button>
            </form>
        </Card>
    )
}

export default AddUser