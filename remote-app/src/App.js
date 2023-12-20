import Button from './Button';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <h1>React</h1>
    <h2>Remote App</h2>
    <Button />
  </BrowserRouter>
);

export default App;
