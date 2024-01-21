import React from "react";
import "./pricing.scss"
import {useInView} from "react-intersection-observer";
import {Link} from "react-router-dom";
import Arrow from "../../navigation/images/arrow-narrow-right-black.svg";


import marked from "./check-circle.svg"
import unMarked from "./x-circle.svg"
import PricingCard from "./pricingCard";
function Pricing (){
  const {ref: useRef1, inView: visibleEl1} = useInView({
    "threshold": 0,
    "triggerOnce": true
  })
  const {ref: useRef2, inView: visibleEl2} = useInView({
    "threshold": 0,
    "triggerOnce": true
  })
  const {ref: useRef3, inView: visibleEl3} = useInView({
    "threshold": 0,
    "triggerOnce": true
  })
  const {ref: useRef4, inView: visibleEl4} = useInView({
    "threshold": 0,
    "triggerOnce": true
  })
  const {ref: useRef5, inView: visibleEl5} = useInView({
    "threshold": 0,
    "triggerOnce": true
  })
  const {ref: useRef6, inView: visibleEl6} = useInView({
    "threshold": 0,
    "triggerOnce": true
  })
  
  const {ref: useRef7, inView: visibleEl7} = useInView({
    "threshold": 0,
    "triggerOnce": true
  })
  const {ref: useRef8, inView: visibleEl8} = useInView({
    "threshold": 0,
    "triggerOnce": true
  })
  const {ref: useRef9, inView: visibleEl9} = useInView({
    "threshold": 0,
    "triggerOnce": true
  })
  const {ref: useRef10, inView: visibleEl10} = useInView({
    "threshold": 0,
    "triggerOnce": true
  })
  const {ref: useRef11, inView: visibleEl11} = useInView({
    "threshold": 0,
    "triggerOnce": true
  })
  
  
  
  
  const BookACall = "Book a call".split('')
  const GetStarted = "Get started +".split('')
  
  return(
     <div className="Pricing">
       <div className="Blocks">
         <div className="block"></div>
         <div className="block"></div>
         <div className="block"></div>
         <div className="block"></div>
         <div className="block"></div>
         <div className="block"></div>
         <div className="block"></div>
         <div className="block"></div>
         <div className="block"></div>
         <div className="block"></div>
         <div className="block"></div>
         <div className="block"></div>
         <div className="block"></div>
         <div className="block"></div>
         <div className="block"></div>
         <div className="block"></div>
         <div className="block"></div>
         <div className="block"></div>
         <div className="block"></div>
         <div className="block"></div>
       </div>
       
       <p ref={useRef1} className={`header ${visibleEl1 ? "scrollAnimation" : ""}`}>Simple and transparent pricing for all</p>
     
        <div className="Main">
            <div className="types">
              
              <Link  onClick={()=>window.scrollTo(0, 0)} ref={useRef2} to="/contact" className={`bookCall G-alignItems-center ${visibleEl2 ? "scrollAnimation" : ""}`}>
                <div className="textBlock">
                  <div className="textLine G-alignItems-center">
                    {BookACall.map((el)=>{
                      if (el !== ' '){
                        return(<div className="letter">{el}</div>)
                      } else {
                        return (<div className="space"></div>)
                      }
                    })}
                  </div>
                  <div className="textLine G-alignItems-center">
                    {BookACall.map((el)=>{
                      if (el !== ' '){
                        return(<div className="letter">{el}</div>)
                      } else {
                        return (<div className="space"></div>)
                      }
                    })}
                  </div>
                </div>
              </Link>

              
              <PricingCard
                 buttonText={GetStarted}
                 planType={"Standard Plan"}
                 planPrice={"$3,499.99/m"}
              />
  
              <PricingCard
                 buttonText={GetStarted}
                 planType={"Essential Plan"}
                 planPrice={"$5,499.99/m"}
                 blue={"BlueBlock"}
              />
  
              <PricingCard
                 buttonText={GetStarted}
                 planType={"Growth Plan"}
                 planPrice={"$9,499.99/m"}
              />
              {/*<div ref={useRef4} className={`PlanBlock G-flex-column ${visibleEl4 ? "scrollAnimation2" : ""}`}>*/}
              {/*    <p className="PlanName">Standard Plan</p>*/}
              {/*    <p className="desc">Pause or cancel anytime.</p>*/}
              {/*    <p className="price">$3,499.99/m</p>*/}
              
              {/*  <Link ref={useRef3} to="/" className={`getStarted G-alignItems-center ${visibleEl3 ? "scrollAnimation" : ""}`}>*/}
              {/*    <div className="textBlock">*/}
              {/*      <div className="textLine G-alignItems-center">*/}
              {/*        {GetStarted.map((el)=>{*/}
              {/*          if (el !== ' '){*/}
              {/*            return(<div className="letter">{el}</div>)*/}
              {/*          } else {*/}
              {/*            return (<div className="space"></div>)*/}
              {/*          }*/}
              {/*        })}*/}
              {/*      </div>*/}
              {/*      <div className="textLine G-alignItems-center">*/}
              {/*        {GetStarted.map((el)=>{*/}
              {/*          if (el !== ' '){*/}
              {/*            return(<div className="letter">{el}</div>)*/}
              {/*          } else {*/}
              {/*            return (<div className="space"></div>)*/}
              {/*          }*/}
              {/*        })}*/}
              {/*      </div>*/}
              {/*    </div>*/}
              {/*  </Link>*/}
              
              {/*</div>*/}
              
              {/*<div ref={useRef5} className={`PlanBlock G-flex-column ${visibleEl4 ? "scrollAnimation2" : ""}`}>*/}
              {/*  <p className="PlanName">Standard Plan</p>*/}
              {/*  <p className="desc">Pause or cancel anytime.</p>*/}
              {/*  <p className="price">$3,499.99/m</p>*/}
              
              {/*  <Link ref={useRef3} to="/" className={`getStarted G-alignItems-center ${visibleEl3 ? "scrollAnimation" : ""}`}>*/}
              {/*    <div className="textBlock">*/}
              {/*      <div className="textLine G-alignItems-center">*/}
              {/*        {GetStarted.map((el)=>{*/}
              {/*          if (el !== ' '){*/}
              {/*            return(<div className="letter">{el}</div>)*/}
              {/*          } else {*/}
              {/*            return (<div className="space"></div>)*/}
              {/*          }*/}
              {/*        })}*/}
              {/*      </div>*/}
              {/*      <div className="textLine G-alignItems-center">*/}
              {/*        {GetStarted.map((el)=>{*/}
              {/*          if (el !== ' '){*/}
              {/*            return(<div className="letter">{el}</div>)*/}
              {/*          } else {*/}
              {/*            return (<div className="space"></div>)*/}
              {/*          }*/}
              {/*        })}*/}
              {/*      </div>*/}
              {/*    </div>*/}
              {/*  </Link>*/}
              
              {/*</div>*/}
              
              {/*<div ref={useRef6} className={`PlanBlock G-flex-column ${visibleEl4 ? "scrollAnimation2" : ""}`}>*/}
              {/*  <p className="PlanName">Standard Plan</p>*/}
              {/*  <p className="desc">Pause or cancel anytime.</p>*/}
              {/*  <p className="price">$3,499.99/m</p>*/}
              
              {/*  <Link ref={useRef3} to="/" className={`getStarted G-alignItems-center ${visibleEl3 ? "scrollAnimation" : ""}`}>*/}
              {/*    <div className="textBlock">*/}
              {/*      <div className="textLine G-alignItems-center">*/}
              {/*        {GetStarted.map((el)=>{*/}
              {/*          if (el !== ' '){*/}
              {/*            return(<div className="letter">{el}</div>)*/}
              {/*          } else {*/}
              {/*            return (<div className="space"></div>)*/}
              {/*          }*/}
              {/*        })}*/}
              {/*      </div>*/}
              {/*      <div className="textLine G-alignItems-center">*/}
              {/*        {GetStarted.map((el)=>{*/}
              {/*          if (el !== ' '){*/}
              {/*            return(<div className="letter">{el}</div>)*/}
              {/*          } else {*/}
              {/*            return (<div className="space"></div>)*/}
              {/*          }*/}
              {/*        })}*/}
              {/*      </div>*/}
              {/*    </div>*/}
              {/*  </Link>*/}
              
              {/*</div>*/}
              
            </div>
          
          <div className="classes">
            
            <div className="classLine G-flex-between G-alignItems-center">
              <p ref={useRef7} className={`name ${visibleEl7 ? "scrollAnimation" : ""}`}>Hours of development time per month</p>
              <div className="marked">
                <span ref={useRef7} className={`${visibleEl7 ? "scrollAnimation2" : ""}`} >20 hours</span>
                <span ref={useRef7} className={`${visibleEl7 ? "scrollAnimation2" : ""}`}>40 hours</span>
                <span ref={useRef7} className={`${visibleEl7 ? "scrollAnimation2" : ""}`}>Unlimited</span>
              </div>
            </div>
  
            <div className="classLine G-flex-between G-alignItems-center">
              <p ref={useRef8} className={`name ${visibleEl8 ? "scrollAnimation" : ""}`}>Dedicated project manager</p>
              <div className="marked">
                <div ref={useRef8} className={`img ${visibleEl8 ? "scrollAnimation2" : ""}`}><img src={marked} alt=""/></div>
                <div ref={useRef8} className={`img ${visibleEl8 ? "scrollAnimation2" : ""}`}><img src={marked} alt=""/></div>
                <div ref={useRef8} className={`img ${visibleEl8 ? "scrollAnimation2" : ""}`}><img src={marked} alt=""/></div>
              </div>
            </div>
  
            <div className="classLine G-flex-between G-alignItems-center">
              <p ref={useRef9} className={`name ${visibleEl9 ? "scrollAnimation" : ""}`}>Weekly progress reports</p>
              <div className="marked">
                <div ref={useRef9} className={`img ${visibleEl9 ? "scrollAnimation2" : ""}`}><img src={marked} alt=""/></div>
                <div ref={useRef9} className={`img ${visibleEl9 ? "scrollAnimation2" : ""}`}><img src={marked} alt=""/></div>
                <div ref={useRef9} className={`img ${visibleEl9 ? "scrollAnimation2" : ""}`}><img src={marked} alt=""/></div>

              </div>
            </div>
  
            <div className="classLine G-flex-between G-alignItems-center">
              <p ref={useRef10} className={`name ${visibleEl10 ? "scrollAnimation" : ""}`}>On-demand access to our development team</p>
              <div className="marked">
                <div ref={useRef10} className={`img ${visibleEl10 ? "scrollAnimation2" : ""}`}><img src={marked} alt=""/></div>
                <div ref={useRef10} className={`img ${visibleEl10 ? "scrollAnimation2" : ""}`}><img src={marked} alt=""/></div>
                <div ref={useRef10} className={`img ${visibleEl10 ? "scrollAnimation2" : ""}`}><img src={marked} alt=""/></div>

              </div>
            </div>
  
            <div className="classLine G-flex-between G-alignItems-center">
              <p ref={useRef11} className={`name ${visibleEl11 ? "scrollAnimation" : ""}`}>Access to our suite of marketing and sales tools</p>
              <div className="marked">
                <div ref={useRef11} className={`img ${visibleEl11 ? "scrollAnimation2" : ""}`}><img src={unMarked} alt=""/></div>
                <div ref={useRef11} className={`img ${visibleEl11 ? "scrollAnimation2" : ""}`}><img src={unMarked} alt=""/></div>
                <div ref={useRef11} className={`img ${visibleEl11 ? "scrollAnimation2" : ""}`}><img src={marked} alt=""/></div>

              </div>
            </div>
          
          
          </div>
        </div>
     
     </div>
  )
}

export default Pricing