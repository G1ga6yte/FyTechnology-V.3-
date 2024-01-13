import React, {useState} from "react";
import "./home.scss";
import HomeHead from "./homeHead/homeHead";
import Spline from "@splinetool/react-spline";
import WhatWeDo from "./homeWhatWeDo/whatWeDo";

function Home() {
  const [ballRight, setBallRight] = useState(-20);
  const [ballTop, setBallTop] = useState(0);
  
  return (
     <div className="Home">
       
       <div className="bckLines">
         <div className="lineBckBlock">
           <div className="line"></div>
           <div className="lightingBlock"></div>
         </div>
         <div className="lineBckBlock">
           <div className="line"></div>
           <div className="lightingBlock"></div>
         </div>
         <div className="lineBckBlock">
           <div className="line"></div>
           <div className="lightingBlock"></div>
         </div>
       </div>
       
       <div style={{
         right: `${ballRight}%`,
         top  : `${ballTop}%`,
       }} className="spline">
         <Spline className="Ball" scene="https://prod.spline.design/gQOkQ2BEvut7DqqV/scene.splinecode"/>
       </div>
       
       
       <HomeHead/>
       <WhatWeDo/>
     </div>
  );
}

export default Home;