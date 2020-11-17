import React from "react";

const Hello = props => {
  return <div style={{ color: props.color }}>Hello, {props.name}</div>;
};

Hello.defaultProps = {
  name: "이름없음",
};

export default Hello;
