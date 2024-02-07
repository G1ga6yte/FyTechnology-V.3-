import React, {useEffect, useState} from "react";
import "./partnerSlide.scss"
import Slider from "react-slick";

import partner1 from "./1.svg"
import partner2 from "./2.svg"
import partner3 from "./3.svg"
import partner4 from "./4.svg"
import partner5 from "./5.svg"
import partner6 from "./6.svg"
import partner7 from "./7.svg"
import partner8 from "./8.svg"
import {useInView} from "react-intersection-observer";
import IntroCanvas from '../../introCanvas/introCanvas'

function PartnerSlide () {
  
  
  
  
  
  
  
  return(
     <div className="PartnerSlide">
       
       
       <div className="introCont">
         <IntroCanvas/>
       </div>
      
     </div>
  )
}

export default PartnerSlide