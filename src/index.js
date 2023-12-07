import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App'; 
import reportWebVitals from './reportWebVitals';
import Poster from './login'
// function Header(){
//   return(
//     <h1>Travel mate</h1>
//   )
// }

// function Body(){
//   return(
//     <h1>Body</h1>
//   )
// }

// function Footer(){
//   return(
//     <h1>Footer</h1>
//   )
// }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<Poster/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
