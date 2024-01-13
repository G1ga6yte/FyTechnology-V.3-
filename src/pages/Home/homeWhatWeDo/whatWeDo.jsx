import React, {useState} from "react";
import "./whatWeDo.scss"
import {OpportunityData} from "./opportunityData";
import Arrow from "../../navigation/images/arrow-narrow-right.svg";
import {Link} from "react-router-dom";
import Reveal from "./Reveal.tsx";

function WhatWeDo (){
  const [activeData, setActiveData] = useState(OpportunityData[0])
  const FindOutMore = "Find out more".split('')
  return(
     <div className="WhatWeDo">
        <p className="header">What we can do</p>
       
       <div className="skillsMainCont G-flex-between">
          <div className="links G-flex-column">
            {OpportunityData.map((el, index)=>{
              return(
                 <p onClick={()=>{
                   setActiveData(el)
                 }} key={index} className={`link ${activeData.name === el.name ? "active" : ""}`}>{el.name}</p>
              )
            })}
          </div>
         
         <div className="imageBlock">
           <img src={require("./Rectangle 83.png")} alt=""/>
         </div>
         
         <div className="mainOfLinks G-flex-column">
            <p className="mainHeader">Including services</p>
           {activeData.content.map((el, index)=>{
             return(
                <p key={index} className="mainEl" >{el}</p>
             )
           })}
           <div className="mainSkill marginTop">App development</div>
           <div className="mainSkill">Web development </div>
           <div className="mainSkill">Software development</div>
  
  
           <Link to="/" className="FindOutMore G-alignItems-center">
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