import React, {useEffect, useState} from "react";
import "./home.scss";
import HomeHead from "./homeHead/homeHead";
import WhatWeDo from "./homeWhatWeDo/whatWeDo";
import FeaturedWork from "./FeaturedWork/featuredWork";
import WhatPayingFor from "./whatPayingFor/whatPayingFor";
import Pricing from "./Pricing/pricing";
import PartnerSlide from "./partnerSlide/partnerSlide";
import FyTechAnimation from "./fyTechAnimation/fyTechAnimation";
import LastVideoScene from "./lastVideoScene/lastVideoScene";
import PricingTablet from "./PricingTablet/PricingTablet";
import FeaturedWorkTablet from "./FeaturedWorkTablet/featuredWorkTablet";
import Bubbles from "./bubbles.png"


function Home() {
  
  return (
     <div className="Home">
  
       
       
       <HomeHead/>
       <WhatWeDo/>
       {/*<FeaturedWorkTablet/>*/}
       <FeaturedWork/>
       <WhatPayingFor/>
       {/*<Pricing/>*/}
       {/*<PricingTablet/>*/}
       <PartnerSlide/>
       {/*<FyTechAnimation/>*/}
       {/*<LastVideoScene/>*/}
     </div>
  );
}

export default Home;