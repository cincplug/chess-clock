import React from 'react';
import ReactDOM from 'react-dom';
import { initialState } from '../../config.js';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={initialState} ><App /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
