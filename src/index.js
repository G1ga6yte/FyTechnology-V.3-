import React from 'react';
import ReactDOM from 'react-dom/client';
import {CartProvider} from "./pages/Home/homeHead/CartContext";
import './index.css';
import "./source/styles/font/font1.scss"
import "./source/styles/mixin.scss"
import "./source/styles/Global.scss"
import App from './App';
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter>
     <CartProvider>
       <App/>
     </CartProvider>
   </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
