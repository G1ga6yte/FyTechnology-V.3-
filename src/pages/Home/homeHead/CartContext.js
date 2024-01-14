import React, {createContext, useContext, useState} from "react";
import {useLocation} from "react-router-dom";
import {OpportunityData} from "../homeWhatWeDo/opportunityData";
const CartContext = createContext();


export const CartProvider = ({children}) => {
  
  function Call(el, el2){
    const locat = useLocation()
    return el === locat.pathname
  }
  
  const [loading, setLoading] = useState(true)
  const [activeData, setActiveData] = useState(OpportunityData[0])
  
  
  
  
  
  return (<CartContext.Provider value={{
    Call, loading, setLoading, activeData, setActiveData
  }}>
    {children}
  </CartContext.Provider>);
};

export const useCartContext = () => {
  return useContext(CartContext);
};