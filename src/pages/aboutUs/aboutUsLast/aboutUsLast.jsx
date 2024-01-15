import React from "react";
import {useInView} from "react-intersection-observer";
import "./aboutUsLast.scss"
import {Link} from "react-router-dom";
import Arrow from "../../navigation/images/arrow-narrow-right.svg";

function AboutUsLast (){
  const {ref: myRef1, inView: visible1} = useInView({
    "threshold": 0,
    "triggerOnce": true
  })
  const {ref: myRef2, inView: visible2} = useInView({
    "threshold": 0,
    "triggerOnce": true
  })
  
  
  const ContactUs = "Contact us".split('')
  
  return(
     <div className="aboutUsLast">
        <p ref={myRef1} className={`header ${visible1 ? "scrollAnimation" : ""}`}>How about we do a thing or two together?</p>
  
       <Link ref={myRef2} to="/contactUs" className={`contactUsBtn G-alignItems-center ${visible2 ? "scrollAnimation2" : ""}`}>
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
           <img src={Arrow} alt=""/>
           <img src={Arrow} alt=""/>
         </div>
  
       </Link>

     </div>
  )
}

export default AboutUsLast