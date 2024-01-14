import React, {useState, useEffect, useRef} from "react";
import "./whatWeDo.scss"
import {OpportunityData} from "./opportunityData";
import Arrow from "../../navigation/images/arrow-narrow-right.svg";
import {Link} from "react-router-dom";
import {useInView} from "react-intersection-observer";
import {useCartContext} from "../homeHead/CartContext";
import LinkWhatWeDo from "./link";
import MainElement from "./mainElement";

function WhatWeDo (){
  const {activeData, setActiveData} = useCartContext()
  const FindOutMore = "Find out more".split('')
  const {ref: myRef, inView: visibleEl} = useInView({
    "threshold": 0,
    "triggerOnce": true
  })
  const {ref: myRef2, inView: visibleEl2} = useInView({
    "threshold": 0,
    "triggerOnce": true
  })
  const {ref: myRef3, inView:visibleEl3} = useInView({
    "threshold": 0,
    "triggerOnce": true
  })
  const {ref: myRef4, inView: visibleEl4} = useInView({
    "threshold": 0,
    "triggerOnce": true
  })
  
  
  
  
  
  return(
     <div className="WhatWeDo">
        <p triggerOnce ref={myRef} className={`header ${visibleEl ? "scrollAnimation" : ""}`}>What we can do</p>
       
       <div className="skillsMainCont G-flex-between">
          <div className="links G-flex-column">
            {OpportunityData.map((el, index)=>{
              return <LinkWhatWeDo el={el} key={index}/>
              
            })}
          </div>
         
         <div className="imageBlock">
           <img src={require("./Rectangle 83.png")} alt=""/>
         </div>
         
         <div className="mainOfLinks G-flex-column">
            <p className="mainHeader">Including services</p>
           {activeData.content.map((el, index)=>{
             return <MainElement el={el} key={index} />
             
           })}
           <div ref={myRef3} className={`mainSkill marginTop ${visibleEl3 ? "scrollAnimation2" : ''}`}>App development</div>
           <div ref={myRef3} className={`mainSkill ${visibleEl3 ? "scrollAnimation2" : ''}`}>Web development </div>
           <div ref={myRef3} className={`mainSkill ${visibleEl3 ? "scrollAnimation2" : ''}`}>Software development</div>
  
  
           <Link ref={myRef4} to="/" className={`FindOutMore G-alignItems-center ${visibleEl4 ? "scrollAnimation2" : ""}`}>
             <div className="textBlock">
               <div className="textLine G-alignItems-center">
                 {FindOutMore.map((el)=>{
                   if (el !== ' '){
                     return(<div className="letter">{el}</div>)
                   } else {
                     return (<div className="space"></div>)
                   }
                 })}
               </div>
               <div className="textLine G-alignItems-center">
                 {FindOutMore.map((el)=>{
                   if (el !== ' '){
                     return(<div className="letter">{el}</div>)
                   } else {
                     return (<div className="space"></div>)
                   }
                 })}
               </div>
             </div>
    
             <div className="middleLine"></div>
    
             <div className="arrowBlock">
               <img src={Arrow} alt=""/>
               <img src={Arrow} alt=""/>
             </div>
           </Link>


         </div>
         
       </div>
       
     </div>
  )
}

export default WhatWeDo