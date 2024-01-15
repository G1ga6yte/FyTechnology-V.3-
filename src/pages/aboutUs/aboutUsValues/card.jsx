import React from "react";
import {useInView} from "react-intersection-observer";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import pagination from "./sticker.svg";


function Card (props){
  const {ref: myRef, inView:visible} = useInView({
    "threshold": 0,
    "triggerOnce": true
  })
  const {ref: myRef1, inView:visible1} = useInView({
    "threshold": 0,
    "triggerOnce": true
  })
  const {ref: myRef2, inView:visible2} = useInView({
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
     ["27.5deg", "-27.5deg"]
  );
  const rotateY = useTransform(
     mouseXSpring,
     [-0.5, 0.5],
     ["-27.5deg", "27.5deg"]
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
     <div  className="CardCont">
       <motion.div onMouseMove={handleMouseMove}
                   onMouseLeave={handleMouseLeave}
                   style={{
                     rotateY,
                     rotateX,
                     transformStyle: "preserve-3d",
                   }} className="cardBlock">
         <div  style={{
           transform: "translateZ(75px)",
           transformStyle: "preserve-3d",
         }} className="textBlock">
           <img ref={myRef} className={`${visible ? "scrollAnimation2" : ""}`} src={props.img} alt=""/>
           <p ref={myRef1} className={`name ${visible2 ? "scrollAnimation" : ""}`}>{props.name}</p>
           <p ref={myRef2} className={`desc ${visible2 ? "scrollAnimation" : ""}`}>{props.prg}</p>
         </div>
       </motion.div>
     </div>
  )
}

export default Card