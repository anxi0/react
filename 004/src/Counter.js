import React, { useState } from "react";

const Counter = () => {
  const [Number, setNumber] = useState(0);
  return (
    <div>
      <h1>{Number} </h1>
      <input
        type="number"
        pattern="\d*"
        placeholder="input number to change"
        value={parseInt(Number) == 0 ? "" : +Number}
        onChange={event => {
          setNumber(event.target.value === "" ? 0 : event.target.value);
        }}
      />
      <div>
        <button onClick={() => setNumber(+Number + 1)}>+1</button>
        <button onClick={() => setNumber(+Number - 1)}>-1</button>
      </div>
    </div>
  );
};

export default Counter;
