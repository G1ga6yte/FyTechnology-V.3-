import React, {useState, useEffect, useRef} from "react";
import "./whatWeDo.scss"
import {OpportunityData} from "./opportunityData";
import {Link} from "react-router-dom";
import {useInView} from "react-intersection-observer";
import {useCartContext} from "../../../CartContext";
import EachCard from "./EachCardComponent/eachCard";

function WhatWeDo (){
  const {activeData, setActiveData} = useCartContext()
  const FindOutMore = "Find out more".split('')
  const {ref: myRef, inView: visibleEl} = useInView()
  const {ref: myRef2, inView: visibleEl2} = useInView()
  const {ref: myRef3, inView:visibleEl3} = useInView()
  const {ref: myRef4, inView: visibleEl4} = useInView()
  
  
  const [winWidth, setWinWidth] = useState("big")
  useEffect(()=>{
    if (window.innerWidth <= 1096){
      setWinWidth("small")
    } else if (window.innerWidth <= 1440){
      setWinWidth("middle")
    }
  })
  
 const {width18, width38} = useCartContext()
  
  return(
     <div className="WhatWeDo">
       <div className="headerBlock">
         <p ref={myRef} className={`header ${visibleEl ? "scrollAnimation" : ""}`}>We are digital Agency</p>
       </div>
       
       <div className="underHeaderBlock">
         <div className="blackLine"></div>
         <p ref={myRef2} className={`underHeader ${visibleEl2 ? "scrollAnimation" : ""}`}>Our Service</p>
       </div>
       
       
       <div className="Cards G-flex-wrap G-flex-between">
         <EachCard mouseOver={false} arr={OpportunityData[0]} width={width38}/>
         <EachCard mouseOver={true} arr={OpportunityData[4]} width={width18}/>
         <EachCard mouseOver={false} arr={OpportunityData[7]} width={width38}/>


       </div>
       
       
       
     </div>
  )
}

export default WhatWeDo