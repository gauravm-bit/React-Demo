import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Demo from './Demo';
import * as serviceWorker from './serviceWorker';
import Avatar from './Avatar';

ReactDOM.render(
  <React.StrictMode>
    <Avatar id="1" name="Kunal" work="VueJs,Frontend" />
    <Avatar id="2" name="Pravin" work="Mean,Fullstack" />
    <Avatar id="3" name="Rishi" work="Java,Testing"/>
    <Avatar id="4" name="Gaurav" work="ReactJs,Frontend"/>
    <Avatar id="5" name="Akshay" work="VueJs,Frontend"/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
