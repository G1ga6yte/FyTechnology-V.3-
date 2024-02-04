import React from "react";
import "./homeHead.scss"
import {useInView} from "react-intersection-observer";
import Lenis from "@studio-freight/lenis";
import BckComp from "../../backgroundComponentHome/bckComp";
import Bubbles from "../bubbles.png";

function HomeHead (){
  const {ref: myRef1, inView: visible1} = useInView()
  const {ref: myRef2, inView: visible2} = useInView()
  const {ref: myRef3, inView: visible3} = useInView()
  
  
  return(
     <div className="HomeHead">
       <BckComp/>
       
       {/*<img className="BubbleImg bubbleAnim" src={Bubbles} alt=""/>*/}
  
       <div className="headerBlock">
          <p ref={myRef1}  className={`header ${visible1 ? "scrollAnimation2" : ""}`}>The</p>
          <p  ref={myRef1} className={`header ${visible1 ? "scrollAnimation" : ""}`}>FyTechnology</p>
  
          <div className="textBlockIn">
            <p ref={myRef2} className={`prg ${visible2 ? "scrollAnimation" : ""}`}>We use the latest technologies to create innovative and user-friendly solutions that meet the needs of our clients</p>
  
            <div className="textBlock">
              <p ref={myRef3} className={`prgRight ${visible3 ? "scrollAnimation2" : ""}`}>Digital products creatives & Impressive</p>
            </div>
          </div>
          
        </div>
       
       <div className="bck">
        <div className="bckIn">
          <div className="scrollText">
            <span>SCROLL</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="99" viewBox="0 0 24 99" fill="none">
              <path d="M10.9393 98.0607C11.5251 98.6464 12.4749 98.6464 13.0607 98.0607L22.6066 88.5147C23.1924 87.9289 23.1924 86.9792 22.6066 86.3934C22.0208 85.8076 21.0711 85.8076 20.4853 86.3934L12 94.8787L3.51472 86.3934C2.92893 85.8076 1.97919 85.8076 1.3934 86.3934C0.807611 86.9792 0.807611 87.9289 1.3934 88.5147L10.9393 98.0607ZM10.5 0L10.5 97H13.5L13.5 0L10.5 0Z" fill="white"/>
            </svg>
          </div>
        </div>
       </div>
     </div>
  )
}

export default HomeHead