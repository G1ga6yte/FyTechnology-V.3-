import React from "react";
import "./featuredWorkTablet.scss"

import img1 from "./Screenshot 2024-01-15 152132.png"
import img2 from "./Screenshot 2024-01-15 152036.png"
import {useInView} from "react-intersection-observer";
function FeaturedWorkTablet (){
  
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
  const {ref: myRef4, inView: visible4} = useInView({
    "threshold": 0,
    "triggerOnce": true
  })
  const {ref: myRef5, inView: visible5} = useInView({
    "threshold": 0,
    "triggerOnce": true
  })
  const {ref: myRef6, inView: visible6} = useInView({
    "threshold": 0,
    "triggerOnce": true
  })
  const {ref: myRef7, inView: visible7} = useInView({
    "threshold": 0,
    "triggerOnce": true
  })
  
  
  
  
  return(
     <div className="featuredWorkBlock">
        <p ref={myRef1} className={`header ${visible1 ? "scrollAnimation" : ""}`}>Featured work</p>
       
       <div className="projectBlock">
         <div className="projectTop">
           <img src={img2} className="projectImg" alt=""/>
  
           <div className="skills">
             <span ref={myRef2} className={`skill ${visible2 ? "scrollAnimation" : ""}`}>Featured</span>
             <span className={`skill ${visible2 ? "scrollAnimation" : ""}`}>App development</span>
             <span className={`skill ${visible2 ? "scrollAnimation" : ""}`}>App development</span>
           </div>
         </div>
         
         <div className="projectBottom">
           <p ref={myRef3} className={`name ${visible3 ? "scrollAnimation" : ""}`}>Fy Technology</p>
           <p ref={myRef4} className={`prg ${visible4 ? "scrollAnimation" : ""}`}>SAAA, LANDING, MARKETING, FIGMA, SOFTWARE DEVELOPMENT</p>
         </div>
       </div>
  
       <div className="projectBlock">
         <div className="projectTop">
           <img src={img1} className="projectImg" alt=""/>
      
           <div className="skills">
             <span ref={myRef5} className={`skill ${visible5 ? "scrollAnimation" : ""}`}>Featured</span>
             <span ref={myRef5} className={`skill ${visible5 ? "scrollAnimation" : ""}`}>App development</span>
             <span ref={myRef5} className={`skill ${visible5 ? "scrollAnimation" : ""}`}>App development</span>
           </div>
         </div>
    
         <div className="projectBottom">
           <p ref={myRef6} className={`name ${visible6 ? "scrollAnimation" : ""}`}>CarFy Web</p>
           <p ref={myRef7} className={`prg ${visible7 ? "scrollAnimation" : ""}`}>SAAA, LANDING, MARKETING, FIGMA, SOFTWARE DEVELOPMENT</p>
         </div>
       </div>
     </div>
  )
}

export default FeaturedWorkTablet