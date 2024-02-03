import React, {useState} from "react";
import "./home.scss";
import HomeHead from "./homeHead/homeHead";
import Spline from "@splinetool/react-spline";
import fetureImg from "./2d9491c4dfb145b17b3b0a124d05023e.png"
import {useInView} from "react-intersection-observer";
import WhatWeDo from "./homeWhatWeDo/whatWeDo";
import FeaturedWork from "./FeaturedWork/featuredWork";
import WhatPayingFor from "./whatPayingFor/whatPayingFor";
import Pricing from "./Pricing/pricing";
import PartnerSlide from "./partnerSlide/partnerSlide";
import FyTechAnimation from "./fyTechAnimation/fyTechAnimation";
import LastVideoScene from "./lastVideoScene/lastVideoScene";
import PricingTablet from "./PricingTablet/PricingTablet";
import FeaturedWorkTablet from "./FeaturedWorkTablet/featuredWorkTablet";
import Lenis from "@studio-freight/lenis";
import BckComp from "../backgroundComponentHome/bckComp";
const SplineView = React.lazy(() => import('./SplineView'));


function Home() {
  const {ref: myRef1, inView: visible1} = useInView({
    "threshold": 0,
    "triggerOnce": true
  })
  const [ballRight, setBallRight] = useState(-20);
  const [ballTop, setBallTop] = useState(0);
  const [ballScale, setBallScale] = useState(1)
  
  const [iconRight, setIconRight] = useState(50)
  const [iconBottom, setIconBottom] = useState(-200)
  const [iconScale, setIconScale] = useState(0.2)
  const [iconRotate, setIconRotate] = useState(0)
  
  
  window.addEventListener('scroll', function (){
    if (this.scrollY <= 1300){
      let right = -20 + ((20/1300) * (this.scrollY))
      let top = ((70/1300)*(this.scrollY))
      let scale =1- ((0.8/1300)*(this.scrollY))
      
      setBallRight(right)
      setBallTop(top)
      setBallScale(scale)
    }
    
    
    if (this.scrollY < 1300 && this.scrollY > 4400){
      setIconRight(50)
      setIconBottom(-200)
      setIconScale(0.2)
      setIconRotate(0)
    }
    
    if (this.scrollY >= 1300 && this.scrollY <=2800){
      let bottom =-150 + ((450/1500)*(this.scrollY-1300))
      let scale = 0.2 + ((7/1500)*(this.scrollY-1300))
      setIconBottom(bottom)
      setIconScale(scale)
    }

    if (this.scrollY >= 3400 && this.scrollY <=4400){
      let bottom = 300 - ((100/1000) * (this.scrollY-3400))
      let scale = 7.2 + ((6/1000)*(this.scrollY-3400))
      let right = 50 - ((20/1000)*(this.scrollY-3400))
      setIconScale(scale)
      setIconBottom(bottom)
      setIconRight(right)
    }
    
    if (this.scrollY >= 1300 && this.scrollY <= 6400){
      let rotate = ((300/3100)*(this.scrollY-1300))
      setIconRotate(rotate)
    }
    
    
  })
  
  return (
     <div className="Home">
       
       {/*<div className="bckLines">*/}
       {/*  <div className="lineBckBlock">*/}
       {/*    <div className="line"></div>*/}
       {/*    <div className="lightingBlock"></div>*/}
       {/*  </div>*/}
       {/*  <div className="lineBckBlock">*/}
       {/*    <div className="line"></div>*/}
       {/*    <div className="lightingBlock"></div>*/}
       {/*  </div>*/}
       {/*  <div className="lineBckBlock">*/}
       {/*    <div className="line"></div>*/}
       {/*    <div className="lightingBlock"></div>*/}
       {/*  </div>*/}
       {/*</div>*/}
       
       
       {/*<div ref={myRef1} style={{*/}
       {/*  right: `${ballRight}%`,*/}
       {/*  top  : `${ballTop}%`,*/}
       {/*  scale: `${ballScale}`*/}
       {/*}} className={`spline ${visible1 ? "scrollAnimation2" : ""}`}>*/}
       {/*  <Spline className="Ball" scene="https://prod.spline.design/gQOkQ2BEvut7DqqV/scene.splinecode"/>*/}
       {/*</div>*/}
       {/*<React.Suspense fallback={<div>Loading...</div>}>*/}
       {/*  <SplineView myRef1={myRef1} ballRight={ballRight} ballTop={ballTop} ballScale={ballScale} visible1={visible1} />*/}
       {/*</React.Suspense>*/}
       
       
       <div style={{bottom: `${iconBottom}px`, right: `${iconRight}%`,}} className="featureImg">
         <img style={{scale: `${iconScale}`, rotate: `${iconRotate}deg` }} src={fetureImg} alt=""/>
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