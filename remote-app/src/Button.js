import { styled } from '@stitches/react';
import React from 'react';
import { Link } from 'host/react-router-dom';

const StyledButton = styled('button', {
  background: '#4b4be8',
  color: '#fff',
  padding: 12,
});

const Button = props => {
  return (
    <Link to="/">
      <StyledButton>Remote Button navigate "/"</StyledButton>
    </Link>
  );
};

export default Button;
