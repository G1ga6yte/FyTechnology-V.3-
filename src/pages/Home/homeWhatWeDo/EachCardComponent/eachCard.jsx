import React, {useEffect, useState} from "react";
import ReactCardFlip from "react-card-flip";
import Arrow from "../../../navigation/images/arrow-narrow-right.svg";
import {Link} from "react-router-dom";
import {useInView} from "react-intersection-observer";
import "./eachCard.scss"

function EachCard (props){
  const [flip, setFlip] = useState(false);
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
  const {ref: myRef7, inView: visibleEl7} = useInView({
    "threshold": 0,
    "triggerOnce": true
  })
  let Arr = props.arr
  let getStarted = "Get started".split('')
  
  // const [display1, setDisplay] = useState(null)
  // useEffect(()=>{
  //   if (props.style){
  //     setDisplay(props.style.display)
  //   }
  // })
  
  return(
     <div onMouseOver={()=>setFlip(true)} onMouseLeave={()=>setFlip(false)} className="CardCont">
       <ReactCardFlip containerClassName="CardDiv" isFlipped={flip} flipDirection="horizontal">
          <div className="FrontCardSide">
            <p ref={myRef5} className={`namePrg ${visibleEl5 ? "scrollAnimation" : ""}`}>{Arr.name}</p>
            <img ref={myRef6} className={`img ${visibleEl6 ? "scrollAnimation" : ""}`} src={Arr.img} alt=""/>
          </div>
         <div className="BackCardSide">
            <p className="namePrg">{Arr.name}</p>
           {Arr.content.map((el, index)=>{
             return (
                <p key={index} className="contentPrg">{el}</p>
             )
           })}
  
           <Link onClick={()=>window.scrollTo(0, 0)} ref={myRef4} to="/contact" className={`FindOutMore G-alignItems-center ${visibleEl4 ? "scrollAnimation2" : ""}`}>
             <div className="textBlock">
               <div className="textLine G-alignItems-center">
                 {getStarted.map((el)=>{
                   if (el !== ' '){
                     return(<div className="letter">{el}</div>)
                   } else {
                     return (<div className="space"></div>)
                   }
                 })}
               </div>
               <div className="textLine G-alignItems-center">
                 {getStarted.map((el)=>{
                   if (el !== ' '){
                     return(<div className="letter">{el}</div>)
                   } else {
                     return (<div className="space"></div>)
                   }
                 })}
               </div>
             </div>
    
    
             <div className="arrowBlock">
               <img src={Arrow} alt=""/>
               <img src={Arrow} alt=""/>
             </div>
           </Link>
         </div>
       </ReactCardFlip>
     </div>
  )
}

export default EachCard