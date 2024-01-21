import React from "react";
import {motion, useMotionValue, useSpring, useTransform} from "framer-motion";
import {useInView} from "react-intersection-observer";

function AccomplishmentCard (props){
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  const rotateX = useTransform(
     mouseYSpring,
     [-0.5, 0.5],
     ["22.5deg", "-22.5deg"]
  );
  const rotateY = useTransform(
     mouseXSpring,
     [-0.5, 0.5],
     ["-22.5deg", "22.5deg"]
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
  
  const {ref: myRef1, inView: visible1} = useInView({
    "threshold": 0,
    "triggerOnce": true
  })
  
  const {ref: myRef2, inView: visible2} = useInView({
    "threshold": 0,
    "triggerOnce": true
  })
  const {ref: myRef3, inView: visible3} = useInView({
    "threshold": 0,
    "triggerOnce": true
  })
  
  
  return(
       <motion.div onMouseMove={handleMouseMove}
                   onMouseLeave={handleMouseLeave}
                   style={{
                     rotateY,
                     rotateX,
                     transformStyle: "preserve-3d",
                   }} className="EachBlock">
         <div  style={{
           transform: "translateZ(75px) !important",
           transformStyle: "preserve-3d !important",
         }} className="textBlock">
           <p ref={myRef1} className={`name ${visible1 ? "scrollAnimation" : ""}`}>{props.header}</p>
           <p ref={myRef2} className={`underName ${visible2 ? "scrollAnimation" : ""}`}>{props.desc}</p>
           <p ref={myRef3} className={`total ${visible3 ? "scrollAnimation" : ""}`}>{props.total}</p>
         </div>
         <div className={props.color}>
         </div>
       </motion.div>
     
  )
}

export default AccomplishmentCard