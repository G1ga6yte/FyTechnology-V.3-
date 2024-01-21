import React from "react";
import "./Projects.scss"
import Project1 from "./project1/project1";
import {useInView} from "react-intersection-observer";

function Projects (){
  const {ref: myRef, inView:visible} = useInView({
    "threshold": 0,
    "triggerOnce": true
  })
  
  
  return(
     <div className="Projects">
       <p ref={myRef} className={`Header ${visible ? "scrollAnimation" : ""}`}>Our Projects</p>
        <Project1 width={50}/>
     </div>
  )
}

export default Projects