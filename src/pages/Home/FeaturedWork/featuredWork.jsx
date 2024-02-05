import React from "react";
import "./featuredWork.scss"
import { useInView } from 'react-intersection-observer'
import CanvasBlock from '../../../canvasComponent/CanvasBlock'
import SlideComponent from './slideComponent/slideComponent'

function FeaturedWork (){
  const {ref: myRef1, inView: visible1} = useInView()
  const {ref: myRef2, inView: visible2} = useInView()
  
  
  return(
     <div className="FeaturedWork">
        <div className="headerBlock">
          <div className="headerCont">
            <p ref={myRef1} className={`FutureWork ${visible1 ? "scrollAnimation" : ""}`}>Future Work</p>
          </div>
          <div className="underHeader">
            <p ref={myRef2} className={`prg ${visible2 ? "scrollAnimation2" : ""}`}>Check all our Project</p>
            <div className="underLine"></div>
          </div>
        </div>
       
       <div className="slider">
         <SlideComponent/>
       </div>
       
       
       
     
     </div>
  )
}

export default FeaturedWork