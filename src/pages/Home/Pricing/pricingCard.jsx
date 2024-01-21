import React from "react";
import {motion, useMotionValue, useSpring, useTransform} from "framer-motion";
import {Link} from "react-router-dom";
import {useInView} from "react-intersection-observer";

function PricingCard (props){
  
  const {ref: useRef1, inView: visibleEl1} = useInView({
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
     ["15.5deg", "-15.5deg"]
  );
  const rotateY = useTransform(
     mouseXSpring,
     [-0.5, 0.5],
     ["-15.5deg", "15.5deg"]
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
  
  
  return(
     <div className="PricingCardBlock">
       <motion.div onMouseMove={handleMouseMove}
                   onMouseLeave={handleMouseLeave}
                   style={{
                     rotateY,
                     rotateX,
                     transformStyle: "preserve-3d",
                   }} className={`cardBlock ${props.blue ? `${props.blue}` : ""}`}>
         <div  style={{
           transform: "translateZ(75px)",
           transformStyle: "preserve-3d",
         }} className="textBlock">
           <p className="PlanName">{props.planType}</p>
           <p className="desc">Pause or cancel anytime.</p>
           <p className="price">{props.planPrice}</p>
  
             <Link onClick={()=>window.scrollTo(0, 0)} ref={useRef1} to="/contact" className={`getStarted G-alignItems-center ${visibleEl1 ? "scrollAnimation" : ""}`}>
             <div className="textBlock">
               <div className="textLine G-alignItems-center">
                 {props.buttonText.map((el)=>{
                   if (el !== ' '){
                     return(<div className="letter">{el}</div>)
                   } else {
                     return (<div className="space"></div>)
                   }
                 })}
               </div>
               <div className="textLine G-alignItems-center">
                 {props.buttonText.map((el)=>{
                   if (el !== ' '){
                     return(<div className="letter">{el}</div>)
                   } else {
                     return (<div className="space"></div>)
                   }
                 })}
               </div>
             </div>
           </Link>
         </div>
       </motion.div>
     </div>
  )
}

export default PricingCard