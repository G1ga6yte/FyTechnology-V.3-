import React from "react";
import {useInView} from "react-intersection-observer";
import "./aboutUsLast.scss"
import {Link} from "react-router-dom";
import Arrow from "../../navigation/images/arrow-narrow-right.svg";
import {motion, useMotionValue, useSpring, useTransform} from "framer-motion";


function AboutUsLast (){
  const {ref: myRef1, inView: visible1} = useInView({
    "threshold": 0,
    "triggerOnce": true
  })
  const {ref: myRef2, inView: visible2} = useInView({
    "threshold": 0,
    "triggerOnce": true
  })
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  const rotateX = useTransform(
     mouseYSpring,
     [-0.5, 0.5],
     ["12.5deg", "-12.5deg"]
  );
  const rotateY = useTransform(
     mouseXSpring,
     [-0.5, 0.5],
     ["-12.5deg", "12.5deg"]
  );
  
  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  
  const ContactUs = "Contact us".split('')
  
  return(
       <motion.div onMouseMove={handleMouseMove}
                   onMouseLeave={handleMouseLeave}
                   style={{
                     rotateY,
                     rotateX,
                     transformStyle: "preserve-3d",
                   }} className="Cont">
         <div style={{
           transform: "translateZ(75px) !important",
           transformStyle: "preserve-3d !important",
         }} className="aboutUsLast">
           <p ref={myRef1} className={`header ${visible1 ? "scrollAnimation" : ""}`}>How about we do a thing or two together?</p>
      
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
               <img src={Arrow} alt=""/>
               <img src={Arrow} alt=""/>
             </div>
      
           </Link>
    
         </div>
       </motion.div>
     

  )
}

export default AboutUsLast