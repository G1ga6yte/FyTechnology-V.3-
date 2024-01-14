import React from "react";
import {useInView} from "react-intersection-observer";
import {useCartContext} from "../homeHead/CartContext";

function LinkWhatWeDo (props){
  const {activeData, setActiveData} = useCartContext()
  const {ref: myRefPrg, inView: visiblePrg} = useInView({
    "threshold": 0,
    "triggerOnce": true
  })

  return(
     <p ref={myRefPrg} onClick={()=>{
       setActiveData(props.el)
     }} key={props.key} className={`link ${activeData.name === props.el.name ? "active" : ""} ${visiblePrg ? "scrollAnimation" : ""}`}>{props.el.name}</p>
  )
}

export default LinkWhatWeDo