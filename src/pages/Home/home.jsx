import React from "react";
import "./home.scss";
import HomeHead from "./homeHead/homeHead";
import WhatWeDo from "./homeWhatWeDo/whatWeDo";
import FeaturedWork from "./FeaturedWork/featuredWork";
import WhatPayingFor from "./whatPayingFor/whatPayingFor";
import PartnerSlide from "./partnerSlide/partnerSlide";
import PricingTablet from "./PricingTablet/PricingTablet";
import FeaturedWorkTablet from "./FeaturedWorkTablet/featuredWorkTablet";

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
     </div>
  );
}

export default Home;