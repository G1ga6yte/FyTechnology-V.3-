import React, {useState} from "react";
import "./home.scss";
import HomeHead from "./homeHead/homeHead";
import Spline from "@splinetool/react-spline";
import WhatWeDo from "./homeWhatWeDo/whatWeDo";
import FeaturedWork from "./FeaturedWork/featuredWork";
import WhatPayingFor from "./whatPayingFor/whatPayingFor";
import Pricing from "./Pricing/pricing";
import PartnerSlide from "./partnerSlide/partnerSlide";
import FyTechAnimation from "./fyTechAnimation/fyTechAnimation";
import LastVideoScene from "./lastVideoScene/lastVideoScene";
import PricingTablet from "./PricingTablet/PricingTablet";
import FeaturedWorkTablet from "./FeaturedWorkTablet/featuredWorkTablet";

function Home() {
  const [ballRight, setBallRight] = useState(-20);
  const [ballTop, setBallTop] = useState(0);
  const [ballScale, setBallScale] = useState(1)
  
  window.addEventListener('scroll', function (){
    if (this.scrollY <= 1300){
      let right = -20 + ((20/1300) * (this.scrollY))
      let top = ((60/1300)*(this.scrollY))
      let scale =1- ((0.8/1300)*(this.scrollY))
      
      setBallRight(right)
      setBallTop(top)
      setBallScale(scale)
    }
    
    if (this.scrollY >= 1300 && this.scrollY <=2800){
      let top =60- ((50/1500)*(this.scrollY-1300))
      let scale = 0.2 + ((0.8/1500)*(this.scrollY-1300))
      setBallScale(scale)
      setBallTop(top)
    }
    
    if (this.scrollY >= 3400 && this.scrollY <=4400){
      let top = 10 - ((10/1000) * (this.scrollY-3400))
      let scale = 1 + ((0.8/1000)*(this.scrollY-3400))
      let right = 0 - ((20/1000)*(this.scrollY-3400))
      setBallScale(scale)
      setBallTop(top)
      setBallRight(right)
    }
    
    
    
    
  })
  
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
         scale: `${ballScale}`
       }} className="spline">
         <Spline className="Ball" scene="https://prod.spline.design/gQOkQ2BEvut7DqqV/scene.splinecode"/>
       </div>
       
       
       <HomeHead/>
       <WhatWeDo/>
       <FeaturedWorkTablet/>
       <FeaturedWork/>
       <WhatPayingFor/>
       <Pricing/>
       <PricingTablet/>
       <PartnerSlide/>
       <FyTechAnimation/>
       <LastVideoScene/>
     </div>
  );
}

export default Home;