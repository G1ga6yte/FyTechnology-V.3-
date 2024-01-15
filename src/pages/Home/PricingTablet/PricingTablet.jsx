import React from "react";
import "./pricingTablet.scss"


import callBlack from "./phone.svg"
import callWhite from "./phone1.svg"
import checkBlack from "./check.svg"
import checkWhite from "./check(1).svg"
import arrowRight from "./arrow-narrow-right.svg"
import {Link} from "react-router-dom";
import {useInView} from "react-intersection-observer";


function PricingTablet (){
  const {ref: myRef1, inView: visible1} = useInView({
    "threshold": 0,
    "triggerOnce": true
  })
  const {ref: myRef2, inView: visible2} = useInView({
    "threshold": 0,
    "triggerOnce": true
  })
  const {ref: myRef3, inView: visible3} = useInView({
    "threshold": 0,
    "triggerOnce": true
  })
  const {ref: myRef4, inView: visible4} = useInView({
    "threshold": 0,
    "triggerOnce": true
  })
  const {ref: myRef5, inView: visible5} = useInView({
    "threshold": 0,
    "triggerOnce": true
  })
  const {ref: myRef6, inView: visible6} = useInView({
    "threshold": 0,
    "triggerOnce": true
  })
  const {ref: myRef7, inView: visible7} = useInView({
    "threshold": 0,
    "triggerOnce": true
  })
  
  
  
  return(
     <div className="PricingTablet">
        <p ref={myRef1} className={`header ${visible1 ? "scrollAnimation" : ""}`}>Stay on track and move forward with our <span>subscription-based</span> project support service</p>
       
       <div ref={myRef2} className={`textBlock ${visible2 ? "scrollAnimation" : ""}`}>
          <p className="miniHeader">Ensure your project is successful</p>
         <p className="prg">Leave project execution and problem-solving to our skilled team</p>
       </div>
  
       <div ref={myRef3} className={`textBlock ${visible3 ? "scrollAnimation" : ""}`}>
         <p className="miniHeader">Focus on your core business</p>
         <p className="prg">Free your time and energy to pursue strategic initiatives</p>
       </div>
  
       <div ref={myRef4} className={`textBlock ${visible4 ? "scrollAnimation" : ""}`}>
         <p className="miniHeader">Avoid costly mistakes and delays</p>
         <p className="prg">Stay in the driver's seat with regular progress reports and clear communication</p>
       </div>
       
       <div ref={myRef5} className={`planBlock ${visible5 ? "scrollAnimation2" : ""}`}>
          <div className="planTypeCallBlock G-flex-between">
              <div className="planType">
                  <p className="planName">Standard Plan</p>
                <p className="planDesc">Pause or cancel anytime.</p>
                <p className="price">$3,499.99/m</p>
              </div>
            
            <a href="" className="callButton">
              <span>Book a call</span>
              <img src={callBlack} alt=""/>
            </a>
  
           </div>
         
         <div className="innerPlan">
           <p className="list"><img src={checkBlack} alt=""/>20 hours of development time per month</p>
           <p className="list"><img src={checkBlack} alt=""/>Dedicated project manager</p>
           <p className="list"><img src={checkBlack} alt=""/>Weekly progress reports</p>
           <p className="list"><img src={checkBlack} alt=""/>On-demand access to our development team</p>
           <p className="list"><img src={checkBlack} alt=""/>Access to our suite of marketing and sales tools</p>
           
           <Link className="subsButton" to="/">Subscribe <img src={arrowRight} alt=""/></Link>
           <p className="underText">Pause or cancel anytime</p>
           
         </div>
       </div>
  
       <div ref={myRef6} className={`planBlock ${visible6 ? "scrollAnimation" : ""}`}>
         <div className="planTypeCallBlock G-flex-between">
           <div className="planType">
             <p className="planName">Essential Plan <span>Most popular</span></p>
             <p className="planDesc">Pause or cancel anytime.</p>
             <p className="price">$5,499.99/m</p>
           </div>
      
           <a href="" className="callButton">
             <span>Book a call</span>
             <img src={callWhite} alt=""/>
           </a>
    
         </div>
    
         <div className="innerPlan">
           <p className="list"><img src={checkWhite} alt=""/>40 hours of development time per month</p>
           <p className="list"><img src={checkWhite} alt=""/>Dedicated project manager</p>
           <p className="list"><img src={checkWhite} alt=""/>Weekly progress reports</p>
           <p className="list"><img src={checkWhite} alt=""/>On-demand access to our development team</p>
      
           <Link className="subsButton" to="/">Subscribe <img src={arrowRight} alt=""/></Link>
           <p className="underText">Pause or cancel anytime</p>
    
         </div>
       </div>
  
       <div ref={myRef7} className={`planBlock ${visible7 ? "scrollAnimation2" : ""}`}>
         <div className="planTypeCallBlock G-flex-between">
           <div className="planType">
             <p className="planName">Growth Plan</p>
             <p className="planDesc">Pause or cancel anytime.</p>
             <p className="price">$9,499.99/m</p>
           </div>
      
           <a href="" className="callButton">
             <span>Book a call</span>
             <img src={callBlack} alt=""/>
           </a>
    
         </div>
    
         <div className="innerPlan">
           <p className="list"><img src={checkBlack} alt=""/>Unlimited access to our team of offshore developers</p>
           <p className="list"><img src={checkBlack} alt=""/>Dedicated project manager</p>
           <p className="list"><img src={checkBlack} alt=""/>Weekly progress reports</p>
           <p className="list"><img src={checkBlack} alt=""/>On-demand access to our development team</p>
      
           <Link className="subsButton" to="/">Subscribe <img src={arrowRight} alt=""/></Link>
           <p className="underText">Pause or cancel anytime</p>
    
         </div>
       </div>


     </div>
  )
}

export default PricingTablet