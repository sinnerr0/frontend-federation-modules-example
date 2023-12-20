import React from 'react';

const style = {
  background: '#ffc600',
  color: '#000',
  padding: 12,
};

const Button = ({ text, onClick }) => <button onClick={onClick} style={style}>{text}</button>;

export default Button;
