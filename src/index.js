import React from 'react'; // This is imported over here in order to use the JSX expression in React
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import {BrowserRouter} from 'react-router-dom';



ReactDOM.render(
  <>
  <BrowserRouter>
  <App />
  </BrowserRouter>
</>,// JSX expression in React (Whatever we write it is known as JSx expression)
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//1) babel is the compiler which helps to convert the React code into browser understandable Javascript code
//2) Babel helps the html part inside render method to convert to react.createElement()
