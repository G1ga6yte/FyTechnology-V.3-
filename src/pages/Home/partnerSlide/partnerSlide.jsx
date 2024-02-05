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

function PartnerSlide () {
  const {ref: myRef, inView: visibleEl} = useInView()
  
  const [slidesToShow, setSlidesToShow] = useState(5)
  
  useEffect(()=>{
    if (window.innerWidth <= 1600){
      setSlidesToShow(4)
    }
    if (window.innerWidth <=1200){
      setSlidesToShow(3)
    }
    if (window.innerWidth <= 880){
      setSlidesToShow(2)
    }
  }, [])
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    easing: "linear",
    autoplaySpeed: 0
  };
  
  
  return(
     <div className="PartnerSlide">
        <p ref={myRef} className={`header ${visibleEl ? "scrollAnimation" : ""}`}>They Trust Us</p>
       
       <Slider {...settings}>
  
         <img src={partner1} alt=""/>
         <img src={partner2} alt=""/>
         <img src={partner3} alt=""/>
         <img src={partner4} alt=""/>
         <img src={partner5} alt=""/>
         <img src={partner6} alt=""/>
         <img src={partner7} alt=""/>
         <img src={partner8} alt=""/>
         
       </Slider>
       
     </div>
  )
}

export default PartnerSlide