import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'mobx-react'

import App from './components/App';
import './index.css';

import stores from './store'

ReactDOM.render(
  <Router>
      <Provider {...stores}>
            <App />
      </Provider>
  </Router>    ,
  document.getElementById('root')
);
