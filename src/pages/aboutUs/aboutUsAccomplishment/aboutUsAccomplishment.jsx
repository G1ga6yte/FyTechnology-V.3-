import React from "react";
import "./aboutUsAccomplishment.scss"
import {useInView} from "react-intersection-observer";
import AccomplishmentCard from "./accomplishmentCard";

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
          <AccomplishmentCard
            color={"color"}
            header={"Launching new products for enterprises"}
            desc={"For the last 2 years we saved over $11.000.000 for our enterprise customers."}
            total={"$5M+"}
          />
          
          <AccomplishmentCard
             color={"color2"}
             header={"We make money for startups. Series A to Series B"}
             desc={"Last 3 years over $120.000.000 clients’ investment."}
             total={"$22M+"}
          />
          
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