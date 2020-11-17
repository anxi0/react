import React, { useState } from "react";

const Counter = () => {
  const [Number, setNumber] = useState(0);
  return (
    <div>
      <h1>{Number} </h1>
      <div>
        <button onClick={() => setNumber(Number + 1)}>+1</button>
        <button onClick={() => setNumber(Number - 1)}>-1</button>
      </div>
    </div>
  );
};

export default Counter;
