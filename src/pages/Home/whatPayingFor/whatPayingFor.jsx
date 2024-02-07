import React from "react";
import "./whatPayingFor.scss";
import {useInView} from "react-intersection-observer";


import bck1 from "./bck4.png"
import bck2 from "./bck5.png"
import Bubbles from '../bubbles.png'
function WhatPayingFor() {
  const LeaveRequest = "Leave a request".split('')
  const {ref: myRef1, inView: visibleEl1} = useInView()
  const {ref: myRef2, inView: visibleEl2} = useInView()
  const {ref: myRef3, inView: visibleEl3} = useInView()
  const {ref: myRef4, inView: visibleEl4} = useInView()
  
  
  
  
  return (
     <div className="WhatPayingFor">
  
       <img className="BubbleImg1 bubbleAnim" src={Bubbles} alt=""/>
       <img className="BubbleImg2 bubbleAnim" src={Bubbles} alt=""/>
  
       <div className="headerBlock">
         <p ref={myRef4} className={`header ${visibleEl4 ? "scrollAnimation" : ""}`}>What are you paying for?</p>
       </div>
       
       <div className="cards G-flex-between G-flex-wrap">
         <div style={{backgroundImage: `url("${bck1}")`}} className="cardCont">
           <p ref={myRef1} className={`CardHeader ${visibleEl1 ? "scrollAnimation" : ""}`}>Sprints</p>
           <p className="prg">You've described <span>a sprint-based approach</span> to project management , where a team <span>focuses on a specific task</span> for a set period of time. This method allows for <span>concentrated effort</span> and clear milestones. Splitting a large project into smaller, manageable tasks can enhance productivity and accountability.</p>
         </div>
  
         <div style={{backgroundImage: `url("${bck2}")`}} className="cardCont">
           <p ref={myRef2} className={`CardHeader ${visibleEl2 ? "scrollAnimation2" : ""}`}>For Haurs</p>
           <p className="prg">Payment model <span>is based on the time</span> spent on <span>your project.</span> Once you provide us with the technical requirements, we dedicate our time to your project and <span>you pay for the hours worked.</span> This approach is ideal when tasks are not recurring regularly.</p>
         </div>
  
         <div className="underTextCont">
           <div ref={myRef3} className="textBlock">
             <p className={`text ${visibleEl3 ? "scrollAnimation2" : ""}`}>Check Plans for yours needs</p>
             <div className="underLine"></div>
           </div>
         </div>
       </div>
     </div>
  );
}

export default WhatPayingFor;