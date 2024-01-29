import React from "react";
import "./services.scss"
import {OpportunityData} from "../Home/homeWhatWeDo/opportunityData";
import EachCard from "../Home/homeWhatWeDo/EachCardComponent/eachCard";
import {useInView} from "react-intersection-observer";


function Services (){
  const {ref: myRef7, inView: visibleEl7} = useInView({
    "threshold": 0,
    "triggerOnce": true
  })
  
  return(
     <div className="Services">
       <p ref={myRef7} className={`header ${visibleEl7 ? "scrollAnimation" : ""}`}>What we can do</p>
  
       {OpportunityData.map((el)=>{
         return(
            <EachCard arr={el}/>
         )
       })}
     </div>
  )
}

export default Services