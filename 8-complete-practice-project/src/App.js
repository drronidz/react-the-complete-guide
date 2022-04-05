import React, {useState} from "react";
import './App.css';
import AddUser from "./components/users/user-form/AddUser";
import UserList from "./components/users/user-list/UserList";

function App() {
    const [userList, setUserList] = useState([])

    const addUserHandler = (username, age) => {
        setUserList(prevState =>  {
            return [
                ...prevState,
                { id: Math.random() ,name: username, age: age }
            ]
        })
    }
    return (
        <div className="App">
            <AddUser onAddUser={addUserHandler}/>
            <UserList users={userList}/>
        </div>
    );
}

export default App;
