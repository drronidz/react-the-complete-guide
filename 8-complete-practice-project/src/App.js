import React from "react";
import './App.css';
import AddUser from "./components/users/user-form/AddUser";
import UserList from "./components/users/user-list/UserList";

function App() {
  return (
    <div className="App">
      <AddUser/>
      <UserList users={[]}/>
    </div>
  );
}

export default App;
