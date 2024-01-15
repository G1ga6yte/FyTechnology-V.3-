import React from "react";
import "./aboutUsHead.scss"
import {useInView} from "react-intersection-observer";

function AboutUsHead() {
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
  
  
  
  return (
     <div className="aboutUsHead G-flex-between ">
       <div className="textBlock">
         <p ref={myRef1} className={`header ${visible1 ? "scrollAnimation" : ""}`}>Who we are</p>
         <p ref={myRef2} className={`prg ${visible2 ? "scrollAnimation" : ""}`}>FyTechnology is a web development, design, and software agency that helps businesses of all
           sizes create successful digital products. We work with clients in a variety of industries, including education,
           healthcare, and government.</p>
         <div className="skills G-flex-wrap">
           <span ref={myRef3} className={`skill ${visible3 ? "scrollAnimation" : ""}`}>Our team operates in more than 10 countries </span>
           <span ref={myRef3} className={`skill ${visible3 ? "scrollAnimation2" : ""}`}>In 8 time zone</span>
         </div>
       </div>
       
       <div ref={myRef4} className={`BallBlock ${visible4 ? "scrollAnimation2" : ""}`}>
         <video  loop autoPlay muted className="videoLoading">
           <source type="video/mp4" src={require('./About us.webm')} />
         </video>
       </div>
     </div>
  );
}

export default AboutUsHead;