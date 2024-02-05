import React from "react";
import "./aboutUsValues.scss"
import {Link} from "react-router-dom";
import {useInView} from "react-intersection-observer";


import bck3 from "../images/bck3.png"
import bck4 from "../images/bck4.png"
import bck5 from "../images/bck5.png"

import bck6 from "../images/bck6.png"
import bck7 from "../images/bck7.png"
import bck8 from "../images/bck8.png"
import bck9 from "../images/bck9.png"

import quality from "../images/quality.png"
import collaboration from "../images/collaboration.png"
import innovation from "../images/innovation.png"

import water4 from "../images/water4.png"
import water5 from "../images/water5.png"

function AboutUsValues (){
  const {ref: myRef1, inView: visible1} = useInView()
  const {ref: myRef2, inView: visible2} = useInView()
  
  const {ref: myRef3, inView: visible3} = useInView()
  const {ref: myRef4, inView: visible4} = useInView()
  const {ref: myRef5, inView: visible5} = useInView()
  const {ref: myRef6, inView: visible6} = useInView()
  const {ref: myRef7, inView: visible7} = useInView()
  const {ref: myRef8, inView: visible8} = useInView()
  
  const {ref: myRef9, inView: visible9} = useInView()
  const {ref: myRef10, inView: visible10} = useInView()
  const {ref: myRef11, inView: visible11} = useInView()
  const {ref: myRef12, inView: visible12} = useInView()
  
  
  const ContactUs = "Contact us".split('')
  
  
  
  
  
  return(
     <div className="aboutUsValues">
  
       <img src={water4} className="water4 bubbleAnim" alt='' />
       <img src={water5} className="water5 bubbleAnim" alt='' />
  
  
       <div className="headerBlock">
          <p ref={myRef1} className={`header ${visible1 ? "scrollAnimation" : ""}`}>Our Values</p>
        </div>
       <p ref={myRef2} className={`underHeader ${visible2 ? "scrollAnimation" : ""}`}>We are guided by the following values in our work:</p>
       
       
       <div className="AboutCardCont G-flex-between G-flex-wrap">
       
          <div style={{backgroundImage: `url("${bck3}")`}} className="headCard">
            <img className="cardImg" src={quality} alt='' />
              <p ref={myRef3} className={`cardHeader ${visible3 ? "scrollAnimation" : ""}`}>Quality</p>
              <p ref={myRef4} className={`cardPrg ${visible4 ? "scrollAnimation" : ""}`}>We strive to create products of the highest quality that meet the needs of our clients</p>
          </div>
  
         <div style={{backgroundImage: `url("${bck4}")`}} className="headCard">
           <img className="cardImg" src={innovation} alt='' />
           <p ref={myRef5} className={`cardHeader ${visible5 ? "scrollAnimation" : ""}`}>Innovation</p>
           <p ref={myRef6} className={`cardPrg ${visible6 ? "scrollAnimation" : ""}`}>We are always looking for new ways to improve our products and services</p>
         </div>
  
         <div style={{backgroundImage: `url("${bck5}")`}} className="headCard">
           <img className="cardImg" src={collaboration} alt='' />
           <p ref={myRef7} className={`cardHeader ${visible7 ? "scrollAnimation" : ""}`}>Collaboration</p>
           <p ref={myRef8} className={`cardPrg ${visible8 ? "scrollAnimation" : ""}`}>We work closely with our clients to understand their needs and create products that meet their goals</p>
         </div>
         
         <div style={{backgroundImage: `url("${bck6}")`}} className="middleCardBlock">
            <p ref={myRef9} className={`miniCardHeader ${visible9 ? "scrollAnimation2" : ""}`}>BRAVE CLIENTS </p>
         </div>
  
         <div style={{backgroundImage: `url("${bck7}")`}} className="middleCardBlock">
           <p ref={myRef10} className={`miniCardHeader ${visible10 ? "scrollAnimation2" : ""}`}>BE UNIQUE</p>
         </div>
  
         <div style={{backgroundImage: `url("${bck8}")`}} className="middleCardBlock">
           <p ref={myRef11} className={`miniCardHeader ${visible11 ? "scrollAnimation2" : ""}`}>NOT BORING</p>
         </div>
       
       </div>
       
       <div style={{backgroundImage: `url("${bck9}")`}} className="lastCard">
          <p ref={myRef12} className={`lastCardPrg ${visible12 ? "scrollAnimation" : ""}`}>How about we do a thing or two together?</p>
  
         <Link onClick={()=>window.scrollTo(0, 0)} ref={myRef2} to="/contact" className={`contactUsBtn G-alignItems-center ${visible2 ? "scrollAnimation2" : ""}`}>
           <div className="textBlock">
             <div className="textLine G-alignItems-center">
               {ContactUs.map((el)=>{
                 if (el !== ' '){
                   return(<div className="letter">{el}</div>)
                 } else {
                   return (<div className="space"></div>)
                 }
               })}
             </div>
             <div className="textLine G-alignItems-center">
               {ContactUs.map((el)=>{
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
             <div>
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <g id="arrow-narrow-right">
                   <path id="Solid" d="M14.7071 5.29289C14.3166 4.90237 13.6834 4.90237 13.2929 5.29289C12.9024 5.68342 12.9024 6.31658 13.2929 6.70711L17.5858 11H4C3.44772 11 3 11.4477 3 12C3 12.5523 3.44772 13 4 13H17.5858L13.2929 17.2929C12.9024 17.6834 12.9024 18.3166 13.2929 18.7071C13.6834 19.0976 14.3166 19.0976 14.7071 18.7071L20.7071 12.7071C21.0976 12.3166 21.0976 11.6834 20.7071 11.2929L14.7071 5.29289Z" fill="white"/>
                 </g>
               </svg>
             </div>
             <div>
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <g id="arrow-narrow-right">
                   <path id="Solid" d="M14.7071 5.29289C14.3166 4.90237 13.6834 4.90237 13.2929 5.29289C12.9024 5.68342 12.9024 6.31658 13.2929 6.70711L17.5858 11H4C3.44772 11 3 11.4477 3 12C3 12.5523 3.44772 13 4 13H17.5858L13.2929 17.2929C12.9024 17.6834 12.9024 18.3166 13.2929 18.7071C13.6834 19.0976 14.3166 19.0976 14.7071 18.7071L20.7071 12.7071C21.0976 12.3166 21.0976 11.6834 20.7071 11.2929L14.7071 5.29289Z" fill="white"/>
                 </g>
               </svg>
             </div>
           </div>
  
         </Link>
       </div>
     </div>
  )
}

export default AboutUsValues