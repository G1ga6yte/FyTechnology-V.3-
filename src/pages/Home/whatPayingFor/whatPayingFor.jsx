import React from "react";
import "./whatPayingFor.scss";
import Spline from "@splinetool/react-spline";
import Arrow from "../../navigation/images/arrow-narrow-right-black.svg";
import {Link} from "react-router-dom";
import {useInView} from "react-intersection-observer";


import firstImg from "./Untitled@5-1920x1137 4.png"
import secondImg from "./Untitled@4-1920x1137 1.png"
const SplineView1 = React.lazy(() => import('./SplineView1'));
const SplineView2 = React.lazy(() => import('./SplineView2'));

function WhatPayingFor() {
  const LeaveRequest = "Leave a request".split('')
  const {ref: myRef, inView: visibleEl} = useInView({
    "threshold": 0,
    "triggerOnce": true
  })
  const {ref: myRef1, inView: visibleEl1} = useInView({
    "threshold": 0,
    "triggerOnce": true
  })
  const {ref: myRef2, inView: visibleEl2} = useInView({
    "threshold": 0,
    "triggerOnce": true
  })
  const {ref: myRef3, inView: visibleEl3} = useInView({
    "threshold": 0,
    "triggerOnce": true
  })
  const {ref: myRef4, inView: visibleEl4} = useInView({
    "threshold": 0,
    "triggerOnce": true
  })
  const {ref: myRef5, inView: visibleEl5} = useInView({
    "threshold": 0,
    "triggerOnce": true
  })
  const {ref: myRef6, inView: visibleEl6} = useInView({
    "threshold": 0,
    "triggerOnce": true
  })
  
  
  
  
  return (
     <div className="WhatPayingFor">
       <p ref={myRef2} className={`header ${visibleEl2 ? "scrollAnimation" : ""}`}>What are you paying for?</p>
       
       <div className="MainCont">
         
         <div className="EachBlock">
            <p ref={myRef3} className={`miniHeader ${visibleEl3 ? "scrollAnimation" : ""}`}>Sprints</p>
           <p ref={myRef4} className={`prg ${visibleEl4 ? "scrollAnimation" : ""}`}>
             You've described <span>a sprint-based approach</span> to project management , where a team <span>focuses on a specific task</span> for a set period of time. This method allows for <span>concentrated effort</span> and clear milestones. Splitting a large project into smaller, manageable tasks can enhance productivity and accountability.
           </p>
           <div className="SplineBlock">
             {/*<React.Suspense fallback={<div>Loading...</div>}>*/}
             {/* <SplineView1/>*/}
             {/*</React.Suspense>*/}
           </div>
           <img className="tabletImg" src={firstImg} alt=""/>
  
           <Link onClick={()=>window.scrollTo(0, 0)} ref={myRef} to="/contact" className={`FindOutMore G-alignItems-center ${visibleEl ? "scrollAnimation" : ""}`}>
             <div className="textBlock">
               <div className="textLine G-alignItems-center">
                 {LeaveRequest.map((el)=>{
                   if (el !== ' '){
                     return(<div className="letter">{el}</div>)
                   } else {
                     return (<div className="space"></div>)
                   }
                 })}
               </div>
               <div className="textLine G-alignItems-center">
                 {LeaveRequest.map((el)=>{
                   if (el !== ' '){
                     return(<div className="letter">{el}</div>)
                   } else {
                     return (<div className="space"></div>)
                   }
                 })}
               </div>
             </div>
    
             <div className="middleLine"></div>
    
             <div className="arrowBlock">
               <img src={Arrow} alt=""/>
               <img src={Arrow} alt=""/>
             </div>
           </Link>
         </div>
         
         <div className="EachBlock">
           <div className="SplineBlock">
             {/*<React.Suspense fallback={<div>Loading...</div>}>*/}
             {/*  <SplineView2/>*/}
             {/*</React.Suspense>*/}
           </div>
           <p ref={myRef5} className={`miniHeader ${visibleEl5 ? "scrollAnimation2" : ""}`}>For hours</p>
           <p ref={myRef6} className={`prg ${visibleEl6 ? "scrollAnimation2" : ""}`}>
             Payment model <span>is based on the time</span> spent on <span>your project.</span> Once you provide us with the technical requirements, we dedicate our time to your project and <span>you pay for the hours worked.</span> This approach is ideal when tasks are not recurring regularly.
           </p>
  
           <img className="tabletImg" src={secondImg} alt=""/>
  
           <Link  onClick={()=>window.scrollTo(0, 0)} ref={myRef1} to="/contact" className={`FindOutMore G-alignItems-center ${visibleEl1 ? "scrollAnimation2" : ""}`}>
             <div className="textBlock">
               <div className="textLine G-alignItems-center">
                 {LeaveRequest.map((el)=>{
                   if (el !== ' '){
                     return(<div className="letter">{el}</div>)
                   } else {
                     return (<div className="space"></div>)
                   }
                 })}
               </div>
               <div className="textLine G-alignItems-center">
                 {LeaveRequest.map((el)=>{
                   if (el !== ' '){
                     return(<div className="letter">{el}</div>)
                   } else {
                     return (<div className="space"></div>)
                   }
                 })}
               </div>
             </div>
    
             <div className="middleLine"></div>
    
             <div className="arrowBlock">
               <img src={Arrow} alt=""/>
               <img src={Arrow} alt=""/>
             </div>
           </Link>
         </div>
       
       </div>
     </div>
  );
}

export default WhatPayingFor;