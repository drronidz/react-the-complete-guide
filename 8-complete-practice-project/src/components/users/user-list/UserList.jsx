import React from "react";
import './UserList.css'
import Card from "../../ui/card/Card";

const UserList = props => {
    return (
        <Card className="users">
            <ul>
                {props.users.map(user =>
                    <li key={user.id}>
                        {user.name} ({user.age} years old)
                    </li>
                )}
            </ul>
        </Card>
    )
}

export default UserList