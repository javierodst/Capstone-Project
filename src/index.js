import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
//adding font awesome icons by building a library
import { library } from "@fortawesome/fontawesome-svg-core";
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import history from './history'
import {Router} from 'react-router-dom'

library.add(faEye, faEyeSlash);

ReactDOM.render(
  <Router history={history} foo="bar">
    <App />
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
