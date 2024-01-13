import React, {createContext, useContext, useState} from "react";
import {useLocation} from "react-router-dom";
const CartContext = createContext();


export const CartProvider = ({children}) => {
  
  function Call(el, el2){
    const locat = useLocation()
    return el === locat.pathname
  }
  
  const [loading, setLoading] = useState(true)
  
  
  
  
  
  return (<CartContext.Provider value={{
    Call, loading, setLoading
  }}>
    {children}
  </CartContext.Provider>);
};

export const useCartContext = () => {
  return useContext(CartContext);
};