import React from "react";

const style = {
  background: "#ffc600",
  color: "#000",
  padding: 12,
};

const Button = ({ text }) => <button style={style}>{text}</button>;

export default Button;
