import React from "react";
import Spline from "@splinetool/react-spline";


function SplineView (props){
  return(
     <div ref={props.myRef1} style={{
       right: `${props.ballRight}%`,
       top  : `${props.ballTop}%`,
       scale: `${props.ballScale}`
     }} className={`spline ${props.visible1 ? "scrollAnimation2" : ""}`}>
       <Spline className="Ball" scene="https://prod.spline.design/gQOkQ2BEvut7DqqV/scene.splinecode"/>
     </div>
  )
}

export default SplineView