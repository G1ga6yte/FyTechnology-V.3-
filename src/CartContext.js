import React, {createContext, useContext, useState} from "react";
import {useLocation} from "react-router-dom";
import {OpportunityData} from "./pages/Home/homeWhatWeDo/opportunityData";
import { useInView } from 'react-intersection-observer'
const CartContext = createContext();


export const CartProvider = ({children}) => {
  
  function Call(el, el2){
    const locat = useLocation()
    return el === locat.pathname
  }
  
  const [loading, setLoading] = useState(true)
  const [activeData, setActiveData] = useState(OpportunityData[0])
  
  
  const [width38, setWidth38] = useState(38)
  const [width18, setWidth18] = useState(18)
  function handleMouseOver (){
    setWidth18(38)
    setWidth38(30)
  }
  function handleMouseLeave (){
    setWidth18(18)
    setWidth38(38)
  }
  
  const [futurePointer, setFuturePointer] = useState("")
  const [cursorFuture, setCursorFuture] = useState(false)
  const {ref: myRef5, inView: visible5} = useInView();
  
  
  return (<CartContext.Provider value={{
    Call, loading, setLoading, activeData, setActiveData,
    width38, setWidth38, width18, setWidth18, handleMouseOver,handleMouseLeave,
    futurePointer, setFuturePointer,cursorFuture, setCursorFuture,
    myRef5, visible5
  }}>
    {children}
  </CartContext.Provider>);
};

export const useCartContext = () => {
  return useContext(CartContext);
};