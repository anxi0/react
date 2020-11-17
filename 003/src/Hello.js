import React from "react";

const Hello = ({ color, name, render }) => {
  return <>{render && <div style={{ color: color }}>Hello, {name}</div>}</>;
};

Hello.defaultProps = {
  name: "이름없음",
};

export default Hello;
