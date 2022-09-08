import React, { useState, Fragment } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => [
      ...prevUsersList,
      { id: Math.random().toString(), name: uName, age: uAge },
    ]);
  };

  return (
    <>
      {/* <React.Fragment>
        <Fragment> */}
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
      {/* </Fragment>
      </React.Fragment> */}
    </>
  );
}

export default App;
