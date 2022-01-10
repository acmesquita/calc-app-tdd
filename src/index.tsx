import React from 'react';
import ReactDOM from 'react-dom';
import { Calculator } from './components';
import './styles/global.css'

ReactDOM.render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>,
  document.getElementById('root')
);
