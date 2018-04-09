import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter as Router } from "react-router-dom";
import './styles/css/index.css';

ReactDOM.render(
    <Router>
      <App/>
    </Router>,
  document.getElementById('root')
);

