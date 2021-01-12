import React from "react";

const UserList = () => {
  const users = [
    {
      id: 1,
      username: "anxi0",
      email: "jjw01040@gmail.com",
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
    },
    {
      id: 3,
      username: "cn",
      email: "contact@cnsolution.net",
    },
  ];
  function List({ user }) {
    return (
      <h1>
        <b>{user.id}</b> {user.username}({user.email})
      </h1>
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
