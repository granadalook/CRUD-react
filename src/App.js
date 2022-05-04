import UserTable from "./components/UserTable";
import EditUserForm from "./components/EditUserForm";
import AddUserForm from "./components/AddUserForm";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const usersData = [
    { id: uuidv4(), name: "Tania", username: "floppydiskette" },
    { id: uuidv4(), name: "Craig", username: "siliconeidolon" },
    { id: uuidv4(), name: "Ben", username: "benisphere" },
  ];
  const [users, setUsers] = useState(usersData);

  const addUser = (user) => {
    user.id = uuidv4();
    setUsers([...users, user]);
  };
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUSer] = useState({
    id: null,
    name: "",
    username: "",
  });
  const editRow = (users) => {
    setEditing(true);
    setCurrentUSer({
      id: users.id,
      name: users.name,
      username: users.username,
    });
  };

  const updataUser = (id, updataUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updataUser : user)));
  };
  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Editar Usuario</h2>
              <EditUserForm currentUser={currentUser} updataUser={updataUser} />
            </div>
          ) : (
            <div>
              <h2 className="text-center m-3">Agregar Usuario</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
        </div>
      </div>
    </div>
  );
}

export default App;
