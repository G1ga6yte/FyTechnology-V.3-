import React, {useEffect, useState} from "react";
import ReactCardFlip from "react-card-flip";
import {useInView} from "react-intersection-observer";
import "./eachCard.scss"


import bck1 from "./cardbck1.png"
import {useCartContext} from "../../../../CartContext";
function EachCard (props){
  const [flip, setFlip] = useState(false);
  const {ref: myRef4, inView: visibleEl4} = useInView({
    "threshold": 0,
    "triggerOnce": true
  })
  let Arr = props.arr
  
  const [header, setHeader] = useState("")
  useEffect(()=>{
    switch (props.arr.name){
      case "Software development":
        setHeader("Developing")
        break;
      case "Design and Branding":
        setHeader("Design")
        break;
      case "Big Data and Analytics":
        setHeader("Big Data and Analytics")
        break;
      case "Web 3.0":
        setHeader("Web 3.0")
        break;
    }
  }, [])
  
  const {handleMouseOver, handleMouseLeave} = useCartContext()
  
  return(
     <div style={{width: `${props.width}%`}} onMouseOver={()=> {
       setFlip(true);
       
       if (props.mouseOver === true){
         handleMouseOver()
       }
     }} onMouseLeave={()=> {
       setFlip(false);
       
       if (props.mouseOver === true){
         handleMouseLeave()
       }
     }} className="CardCont">
       <ReactCardFlip containerClassName="CardDiv" isFlipped={flip} flipDirection="horizontal">
          <div style={{backgroundImage: `url("${bck1}")`}} className="FrontCardSide">
              <p className={`CardHeader ${props.mouseOver === false ? props.width === 30 ? "smallPrg" : "" : ""}`}>{header}</p>
          </div>
         <div style={{backgroundImage: `url("${bck1}")`}} className="BackCardSide">
           <p className={`CardHeader ${props.mouseOver === false ? props.width === 30 ? "smallPrg" : "" : ""}`}>{header}</p>
           
           
         </div>
       </ReactCardFlip>
     </div>
  )
}

export default EachCard