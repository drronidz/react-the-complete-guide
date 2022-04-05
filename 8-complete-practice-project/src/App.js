import React, {useState} from "react";
import './App.css';
import AddUser from "./components/users/user-form/AddUser";
import UserList from "./components/users/user-list/UserList";
import Wrapper from "./components/ui/helpers/wrapper/Wrapper";

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
        <Wrapper className="App">
            <AddUser onAddUser={addUserHandler}/>
            <UserList users={userList}/>
        </Wrapper>
    );
}

export default App;
