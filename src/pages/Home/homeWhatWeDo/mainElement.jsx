import React from "react";
import {useInView} from "react-intersection-observer";

function MainElement (props){
  const {ref: myRef, inView: visibleEl} =useInView({
    threshold: 0,
    triggerOnce: true
  })
  
  return <p ref={myRef} key={props.key} className={`mainEl ${visibleEl ? "scrollAnimation2" : ''}`} >{props.el}</p>
}

export default MainElement