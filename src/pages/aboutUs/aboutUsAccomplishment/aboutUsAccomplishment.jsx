import React from "react";
import "./aboutUsAccomplishment.scss"
import {useInView} from "react-intersection-observer";

function AboutUsAccomplishment (){
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
  const {ref: myRef5, inView: visible5} = useInView({
    "threshold": 0,
    "triggerOnce": true
  })
  const {ref: myRef6, inView: visible6} = useInView({
    "threshold": 0,
    "triggerOnce": true
  })
  const {ref: myRef7, inView: visible7} = useInView({
    "threshold": 0,
    "triggerOnce": true
  })
  const {ref: myRef8, inView: visible8} = useInView({
    "threshold": 0,
    "triggerOnce": true
  })
  
  return(
     <div className="aboutUsAccomplishment">
        <p ref={myRef1} className={`header ${visible1 ? "scrollAnimation" : ""}`}>Our Accomplishments</p>
        <p ref={myRef2} className={`prg ${visible2 ? "scrollAnimation" : ""}`}>We are proud of our work that has helped our clients succeed. Here are some of our accomplishments:</p>
    
        <div className="MainBlocks">
          
          <div className="EachBlock">
            <div className="textBlock">
              <p ref={myRef3} className={`name ${visible3 ? "scrollAnimation" : ""}`}>Launching new products for enterprises</p>
              <p ref={myRef4} className={`underName ${visible4 ? "scrollAnimation" : ""}`}>For the last 2 years we saved over $11.000.000 for our enterprise customers.</p>
              <p ref={myRef5} className={`total ${visible5 ? "scrollAnimation" : ""}`}>$5M+</p>
            </div>
            <div className="color">
            
            </div>
          </div>
  
          <div className="EachBlock">
            <div className="textBlock">
              <p ref={myRef6} className={`name ${visible6 ? "scrollAnimation2" : ""}`}>We make money for startups. Series A to Series B</p>
              <p ref={myRef7} className={`underName ${visible7 ? "scrollAnimation2" : ""}`}>Last 3 years over $120.000.000 clients’ investment.</p>
              <p ref={myRef8} className={`total ${visible8 ? "scrollAnimation2" : ""}`}>$22M+</p>
            </div>
            
            <div className="color2">
  
            </div>
          </div>
        </div>
    
    
       <div className="BlocksCont">
         <div className="BlocksLine">
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
         </div>
         <div className="BlocksLine">
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
         </div>
         <div className="BlocksLine">
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
         </div>
         <div className="BlocksLine">
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
         </div>
         <div className="BlocksLine">
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
         </div>
         <div className="BlocksLine">
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
         </div>
         <div className="BlocksLine">
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
         </div>
         <div className="BlocksLine">
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
         </div>
         <div className="BlocksLine">
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
         </div>
         <div className="BlocksLine">
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
         </div>
         <div className="BlocksLine">
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
         </div>
         <div className="BlocksLine">
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
         </div>
         <div className="BlocksLine">
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
         </div>
         <div className="BlocksLine">
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
         </div>
         <div className="BlocksLine">
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
         </div>
         <div className="BlocksLine">
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
         </div>
         <div className="BlocksLine">
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
         </div>
         <div className="BlocksLine">
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
         </div>
         <div className="BlocksLine">
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
         </div>
         <div className="BlocksLine">
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
           <div className="Block"></div>
         </div>

       </div>
       
     </div>
  )
}

export default AboutUsAccomplishment