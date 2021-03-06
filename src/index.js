import React from 'react';
import ReactDOM from 'react-dom';
import './Global-styling/global.css'
import Header from './components/Header/Header.js';
import Main from './components/Main/Main.js';


ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
