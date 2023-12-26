import React from "react";

const style = {
  background: "#ffc600",
  color: "#000",
  padding: 12,
};

type TButtonProps = {
  text: string;
};

const Button = ({ text }: TButtonProps) => (
  <button style={style}>{text}</button>
);

export default Button;
