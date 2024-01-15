import React from "react";
import "./aboutUsValues.scss"
import {useInView} from "react-intersection-observer";

import star from "./quality 1.svg"
import pagination from "./sticker.svg"
import flag from "./flag.svg"
import Card from "./card";

function AboutUsValues (){
  const {ref: myRef1, inView: visible1} = useInView({
    "threshold": 0,
    "triggerOnce": true
  })
  const {ref: myRef2, inView: visible2} = useInView({
    "threshold": 0,
    "triggerOnce": true
  })
  
  
  
  
  return(
     <div className="aboutUsValues">
        <p ref={myRef1} className={`header ${visible1 ? "scrollAnimation" : ""}`}>Our Values</p>
       <p ref={myRef2} className={`underText ${visible2 ? "scrollAnimation" : ""}`}>We are guided by the following values in our work:</p>
       
       
       <div className="CardsCont">
          <Card img={star} name={"Quality"} prg={"We strive to create products of the highest quality that meet the needs of our clients"}/>
         <Card img={pagination} name={"Innovation"} prg={"We are always looking for new ways to improve our products and services"}/>
         <Card img={flag} name={"Collaboration"} prg={"We work closely with our clients to understand their needs and create products that meet their goals"}/>

       </div>
       
     </div>
  )
}

export default AboutUsValues