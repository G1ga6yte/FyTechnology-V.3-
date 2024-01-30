import React from "react";
import "./homeHead.scss"
import {useInView} from "react-intersection-observer";
import Lenis from "@studio-freight/lenis";

function HomeHead (){
  const {ref: myRef1, inView: visible1} = useInView({
    "threshold": 0,
    "triggerOnce": true
  })
  const {ref: myRef2, inView: visible2} = useInView({
    "threshold": 0,
    "triggerOnce": true
  })
  
  
  return(
     <div className="HomeHead">
        <p ref={myRef1}  className={`header ${visible1 ? "scrollAnimation" : ""}`}>The</p>
       <p  ref={myRef1} className={`header ${visible1 ? "scrollAnimation" : ""}`}>FyTechnology</p>

       <p ref={myRef2} className={`prg ${visible2 ? "scrollAnimation" : ""}`}>We use the latest technologies to create innovative and user-friendly solutions that meet the needs of our clients</p>

     </div>
  )
}

export default HomeHead