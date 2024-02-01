import React from "react";
import Slider from "react-slick";
import {useNavigate} from 'react-router-dom';

import img1 from "./project1Img/Screenshot 2024-01-20 203710.png"
import img2 from "./project1Img/Screenshot 2024-01-20 203824.png"
import img3 from "./project1Img/Screenshot 2024-01-20 203907.png"
import img4 from "./project1Img/Screenshot 2024-01-20 203753.png"
import {motion, useMotionValue, useSpring, useTransform} from "framer-motion";
import {useInView} from "react-intersection-observer";
function Project1 (props){
  const navigate = useNavigate();
  const goProject = (link) => {
    navigate(link);
  };
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
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  const rotateX = useTransform(
     mouseYSpring,
     [-0.5, 0.5],
     ["10.5deg", "-10.5deg"]
  );
  const rotateY = useTransform(
     mouseXSpring,
     [-0.5, 0.5],
     ["-10.5deg", "10.5deg"]
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
       <motion.div onMouseMove={handleMouseMove}
                   onMouseLeave={handleMouseLeave}
                   onClick={()=>{
                     goProject("/carfy")
                     window.scrollTo(0, 0)
                   }}
                   style={{
                     rotateY,
                     rotateX,
                     transformStyle: "preserve-3d"
                   }} className={`cardBlock ${props.width === 50 ? "half": `${props.width === 25 ? "quarter" : ""}`}`}>
         
         <div style={{
           transform: "translateZ(75px)",
           transformStyle: "preserve-3d",
         }} className="ProjectBlock">
  
         <Slider {...settings}>
          <img className="item" src={img1} alt=""/>
          <img className="item" src={img2} alt=""/>
          <img className="item" src={img3} alt=""/>
          <img className="item" src={img4} alt=""/>
        </Slider>
       
       <div ref={myRef} className={`skills ${visible ? "scrollAnimation" : ""}`}>
          <div className="skill active">Featured</div>
         <div className="skill">App development</div>
         <div className="skill">User Interface</div>
         <div className="skill">Network Infrastructure</div>
         <div className="skill">User Assistance</div>
       </div>
           
           <div className="textBlock">
              <p ref={myRef1} className={`header ${visible1 ? "scrollAnimation" : ""}`}>CarFy</p>
             <p ref={myRef2} className={`prg ${visible2 ? "scrollAnimation" : ""}`}>SAAA, LANDING, MARKETING, FIGMA, SOFTWARE DEVELOPMENT</p>
           </div>

     </div>

       </motion.div>
  )
}

export default Project1