import UserList from "./UserList";
import CreateUser from "./Createuser";
import { useState, useRef } from "react";

function App() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });
  const { username, email } = inputs;
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const [users, setUsers] = useState([
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
  ]);
  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    setUsers([...users, user]);

    setInputs({
      username: "",
      email: "",
    });
    nextId.current++;
  };
  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id));
    nextId.current--;
  };
  const onToggle = id => {
    setUsers(
      users.map(user =>
        user.id === id
          ? {
              ...user,
              active: !user.active,
            }
          : user
      )
    );
  };
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />{" "}
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />{" "}
    </>
  );
}

export default App;
