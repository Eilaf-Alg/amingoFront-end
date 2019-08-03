import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "./App.css";
import App from './App';
import * as serviceWorker from './serviceWorker';

// ** takes our app component and inserts it into the index main folder in /public.index.html
ReactDOM.render(<App />, document.getElementById('root')); 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
