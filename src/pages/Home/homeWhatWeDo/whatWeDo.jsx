import React, {useState, useEffect, useRef} from "react";
import "./whatWeDo.scss"
import {OpportunityData} from "./opportunityData";
import {Link} from "react-router-dom";
import {useInView} from "react-intersection-observer";
import {useCartContext} from "../../../CartContext";
import EachCard from "./EachCardComponent/eachCard";

import bck2 from "./EachCardComponent/cardbck2.png"
import Bubbles from "../bubbles.png";
function WhatWeDo (){
  const {ref: myRef, inView: visibleEl} = useInView()
  const {ref: myRef2, inView: visibleEl2} = useInView()
  const {ref: myRef3, inView:visibleEl3} = useInView()
  
  
 const {width18, width38} = useCartContext()
  
  return(
     <div  className="WhatWeDo">
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
         <EachCard mouseOver={null} arr={OpportunityData[15]} width={38}/>
         <div style={{backgroundImage: `url("${bck2}")`}} className="bck2" ></div>
         
         
         <div className="underText">
           <div className="textBlock">
             <p ref={myRef3} className={`text ${visibleEl3 ? "scrollAnimation" : ""}`}>Our skill set</p>
             <div className="underLine"></div>
           </div>
         </div>

       </div>
  
       <img className="BubbleImg2 bubbleAnim" src={Bubbles} alt=""/>


     </div>
  )
}

export default WhatWeDo