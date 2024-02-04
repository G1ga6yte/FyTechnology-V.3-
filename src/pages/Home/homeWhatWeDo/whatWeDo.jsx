import React, {useState, useEffect, useRef} from "react";
import "./whatWeDo.scss"
import {OpportunityData} from "./opportunityData";
import {Link} from "react-router-dom";
import {useInView} from "react-intersection-observer";
import {useCartContext} from "../../../CartContext";
import EachCard from "./EachCardComponent/eachCard";

import bck2 from "./EachCardComponent/cardbck2.png"
import bck3 from "./EachCardComponent/cardbck3.png"
import Bubbles from "../bubbles.png";
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
       <img className="BubbleImg1 bubbleAnim" src={Bubbles} alt=""/>
  
  
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

         
         <div style={{backgroundImage: `url("${bck2}")`}} className="bck2"></div>
         <EachCard mouseOver={null} arr={OpportunityData[15]} width={width38}/>
         <div style={{backgroundImage: `url("${bck2}")`}} className="bck2" ></div>
         
         <Link onClick={()=>window.scrollTo(0, 0)} to="/service" style={{backgroundImage: `url("${bck3}")`}} className="linkToService">
           <p className="text">It infrastructure and more</p>
           <svg xmlns="http://www.w3.org/2000/svg" width="133" height="133" viewBox="0 0 133 133" fill="none">
             <path d="M88.5464 78.1751L91.5515 44.7632L58.1396 41.7581" stroke="white" strokeWidth="8" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
             <path d="M40.5552 87.3432L91.041 45.1895" stroke="white" strokeWidth="8" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
           </svg>
         </Link>

       </div>
  
       <img className="BubbleImg2 bubbleAnim" src={Bubbles} alt=""/>


     </div>
  )
}

export default WhatWeDo