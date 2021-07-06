import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
// import SignIn from './views/Signin';

it('renders without crashing', () => {
  render(<App />);
});

// it('signin check', () => {
//   render(<App />);
// });