import React from "react";

const UserList = ({ users, onRemove, onToggle }) => {
  function List({ user }) {
    return (
      <div>
        <b
          style={{ cursor: "pointer", color: user.active ? "green" : "black" }}
          onClick={() => onToggle(user.id)}
        >
          {user.username}
        </b>
        ({user.email})<button onClick={() => onRemove(user.id)}>삭제</button>
      </div>
    );
  }
  return (
    <>
      {users.map(user => (
        <List user={user} key={user.id} />
      ))}
    </>
  );
};

export default UserList;
