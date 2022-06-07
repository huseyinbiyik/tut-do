import React from 'react';
import ReactDOM from 'react-dom';
// component file
import { BrowserRouter as Router } from 'react-router-dom';
import TodoContainer from './components/TodoContainer';

// stylesheet
import './App.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <TodoContainer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
