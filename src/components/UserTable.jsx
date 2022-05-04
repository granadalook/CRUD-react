import React from "react";
const UserTable = (props) => {
  console.log(props.users);
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Usuarios</th>
          <th>Acciones </th>
        </tr>
      </thead>
      <tbody>
        {props.users.length > 0 ? (
          props.users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>
                <button
                  className="btn btn-outline-info btn-sm me-2"
                  onClick={() => props.editRow(user)}
                >
                  Editar
                </button>
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => props.deleteUser(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>No hay usuarios</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default UserTable;
