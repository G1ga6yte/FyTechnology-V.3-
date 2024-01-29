import React, {useState, useEffect, useRef} from "react";
import "./whatWeDo.scss"
import {OpportunityData} from "./opportunityData";
import Arrow from "../../navigation/images/arrow-narrow-right.svg";
import {Link} from "react-router-dom";
import {useInView} from "react-intersection-observer";
import {useCartContext} from "../homeHead/CartContext";
import LinkWhatWeDo from "./link";
import MainElement from "./mainElement";
import EachCard from "./EachCardComponent/eachCard";

function WhatWeDo (){
  const {activeData, setActiveData} = useCartContext()
  const FindOutMore = "Find out more".split('')
  const {ref: myRef, inView: visibleEl} = useInView({
    "threshold": 0,
    "triggerOnce": true
  })
  const {ref: myRef2, inView: visibleEl2} = useInView({
    "threshold": 0,
    "triggerOnce": true
  })
  const {ref: myRef3, inView:visibleEl3} = useInView({
    "threshold": 0,
    "triggerOnce": true
  })
  const {ref: myRef4, inView: visibleEl4} = useInView({
    "threshold": 0,
    "triggerOnce": true
  })
  
  
  
  
  
  return(
     <div className="WhatWeDo G-flex-between  G-flex-wrap">
        <p ref={myRef} className={`header ${visibleEl ? "scrollAnimation" : ""}`}>What we can do</p>
       
       
       <EachCard arr={OpportunityData[0]}/>
       <EachCard arr={OpportunityData[1]}/>
       <EachCard arr={OpportunityData[2]}/>
       <EachCard arr={OpportunityData[3]}/>
       <EachCard arr={OpportunityData[4]}/>
       <EachCard arr={OpportunityData[5]}/>
       <EachCard arr={OpportunityData[6]}/>
       <Link onClick={()=>window.scrollTo(0, 0)} to="/service" className="showMoreBtn">
          <p className="namePrg">More services</p>
         <svg className="count" xmlns="http://www.w3.org/2000/svg" width="171" height="112" viewBox="0 0 171 112" fill="none">
           <path d="M29.7978 102.22V70.8282H0V56.7887H29.7978V25.3972H45.2485V56.7887H75.0464V70.8282H45.2485V102.22H29.7978Z" fill="#0038FF"/>
           <path d="M171 42.907C171 50.8995 169.791 58.4188 167.374 65.4648C164.956 72.5108 161.803 78.9784 157.914 84.8676C154.025 90.7568 149.716 96.015 144.986 100.642C140.256 105.269 135.579 109.055 130.954 112H107.305C113.612 107.478 119.287 103.114 124.333 98.907C129.378 94.7005 133.74 90.3887 137.418 85.9718C141.202 81.5549 144.355 76.9277 146.878 72.0901C149.401 67.1474 151.345 61.6789 152.711 55.6845L151.608 55.369C150.452 57.5775 149.085 59.6808 147.509 61.6789C145.932 63.5718 144.093 65.2545 141.99 66.7268C139.888 68.1991 137.471 69.3559 134.738 70.1972C132.005 71.0385 128.905 71.4592 125.436 71.4592C120.706 71.4592 116.344 70.6704 112.35 69.093C108.356 67.5155 104.888 65.2545 101.945 62.3099C99.0017 59.2601 96.6894 55.6319 95.0077 51.4254C93.4311 47.2188 92.6427 42.4864 92.6427 37.2282C92.6427 31.7596 93.5362 26.7643 95.323 22.2423C97.2149 17.615 99.8426 13.6714 103.206 10.4113C106.675 7.15118 110.826 4.62723 115.661 2.83944C120.496 0.946479 125.857 0 131.743 0C137.839 0 143.304 0.999061 148.139 2.99718C153.079 4.9953 157.231 7.88732 160.594 11.6732C163.958 15.354 166.533 19.8235 168.32 25.0817C170.107 30.3399 171 36.2817 171 42.907ZM131.9 57.4197C138.522 57.4197 143.672 55.6319 147.351 52.0563C151.03 48.3756 152.869 43.2225 152.869 36.5972V35.0197C152.869 28.3944 151.03 23.2939 147.351 19.7183C143.672 16.0376 138.522 14.1972 131.9 14.1972C125.173 14.1972 119.971 16.0376 116.292 19.7183C112.613 23.2939 110.774 28.3944 110.774 35.0197V36.5972C110.774 43.2225 112.613 48.3756 116.292 52.0563C119.971 55.6319 125.173 57.4197 131.9 57.4197Z" fill="#0038FF"/>
         </svg>
       </Link>
  
  
  
  
       {/*<div className="skillsMainCont G-flex-between">*/}
       {/*   <div className="links G-flex-column">*/}
       {/*     {OpportunityData.map((el, index)=>{*/}
       {/*       return <LinkWhatWeDo el={el} key={index}/>*/}
       {/*       */}
       {/*     })}*/}
       {/*   </div>*/}
       {/*  */}
       {/*  <div className="imageBlock">*/}
       {/*    <img src={activeData.img} alt=""/>*/}
       {/*  </div>*/}
       {/*  */}
       {/*  <div className="mainOfLinks G-flex-column">*/}
       {/*     <p className="mainHeader">Including services</p>*/}
       {/*    {activeData.content.map((el, index)=>{*/}
       {/*      return <MainElement el={el} key={index} />*/}
       {/*      */}
       {/*    })}*/}
       {/*    */}
       
       {/*    {*/}
       {/*      activeData.skills.map((el, index) => {*/}
       {/*        return <div key={index} ref={myRef3} className={`mainSkill ${visibleEl3 ? "scrollAnimation2" : ''}`}>{el}</div>*/}
       {/*      })*/}
       {/*    }*/}
       
           {/*<Link onClick={()=>window.scrollTo(0, 0)} ref={myRef4} to="/" className={`FindOutMore G-alignItems-center ${visibleEl4 ? "scrollAnimation2" : ""}`}>*/}
           {/*  <div className="textBlock">*/}
           {/*    <div className="textLine G-alignItems-center">*/}
           {/*      {FindOutMore.map((el)=>{*/}
           {/*        if (el !== ' '){*/}
           {/*          return(<div className="letter">{el}</div>)*/}
           {/*        } else {*/}
           {/*          return (<div className="space"></div>)*/}
           {/*        }*/}
           {/*      })}*/}
           {/*    </div>*/}
           {/*    <div className="textLine G-alignItems-center">*/}
           {/*      {FindOutMore.map((el)=>{*/}
           {/*        if (el !== ' '){*/}
           {/*          return(<div className="letter">{el}</div>)*/}
           {/*        } else {*/}
           {/*          return (<div className="space"></div>)*/}
           {/*        }*/}
           {/*      })}*/}
           {/*    </div>*/}
           {/*  </div>*/}
           
           {/*  <div className="middleLine"></div>*/}
           
           {/*  <div className="arrowBlock">*/}
           {/*    <img src={Arrow} alt=""/>*/}
           {/*    <img src={Arrow} alt=""/>*/}
           {/*  </div>*/}
           {/*</Link>*/}
       
       
       {/*  </div>*/}
       {/*  */}
       {/*</div>*/}
       
     </div>
  )
}

export default WhatWeDo