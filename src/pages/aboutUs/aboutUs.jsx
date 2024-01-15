import React from "react";
import "./aboutUs.scss"
import AboutUsHead from "./aboutUsHead/aboutUsHead";
import AboutUsValues from "./aboutUsValues/aboutUsValues";
import AboutUsAccomplishment from "./aboutUsAccomplishment/aboutUsAccomplishment";
import AboutUsLast from "./aboutUsLast/aboutUsLast";

function AboutUs () {
  return(
     <div className="aboutUs">
        <AboutUsHead/>
       <AboutUsValues/>
       <AboutUsAccomplishment/>
       <AboutUsLast/>
     </div>
  )
}

export default AboutUs