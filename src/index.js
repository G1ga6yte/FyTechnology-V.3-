import { createRoot } from 'react-dom/client'
import React from 'react';
import ReactDOM from 'react-dom/client';
import {CartProvider} from "./CartContext";
import './canvasComponent/styles.scss'
import './index.css';
import "./source/styles/font/font1.scss"
import "./source/styles/mixin.scss"
import "./source/styles/Global.scss"
import MyApp from './myApp';
import {BrowserRouter} from "react-router-dom";

function Root() {
  return (
    <>
      <MyApp/>
    </>
  )
}

createRoot(document.getElementById('root')).render(
   <BrowserRouter>
     <CartProvider>
       
         <Root />
       
     </CartProvider>
   </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
