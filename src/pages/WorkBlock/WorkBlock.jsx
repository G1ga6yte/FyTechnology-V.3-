import React from "react";
import "./workBlock.scss";

import img1 from "./Rectangle 7.png";
import {useInView} from "react-intersection-observer";
import {Link} from "react-router-dom";
import Arrow from "../navigation/images/arrow-narrow-right.svg";

function WorkBlock() {
  const {ref: myRef1, inView: visible1} = useInView({
    "threshold"  : 0,
    "triggerOnce": true,
  });
  const {ref: myRef2, inView: visible2} = useInView({
    "threshold"  : 0,
    "triggerOnce": true,
  });
  const {ref: myRef3, inView: visible3} = useInView({
    "threshold"  : 0,
    "triggerOnce": true,
  });
  const {ref: myRef4, inView: visible4} = useInView({
    "threshold"  : 0,
    "triggerOnce": true,
  });
  const {ref: myRef5, inView: visible5} = useInView({
    "threshold"  : 0,
    "triggerOnce": true,
  });
  const {ref: myRef6, inView: visible6} = useInView({
    "threshold"  : 0,
    "triggerOnce": true,
  });
  const {ref: myRef7, inView: visible7} = useInView({
    "threshold"  : 0,
    "triggerOnce": true,
  });
  const {ref: myRef8, inView: visible8} = useInView({
    "threshold"  : 0,
    "triggerOnce": true,
  });
  const {ref: myRef9, inView: visible9} = useInView({
    "threshold"  : 0,
    "triggerOnce": true,
  });
  const {ref: myRef10, inView: visible10} = useInView({
    "threshold"  : 0,
    "triggerOnce": true,
  });
  const {ref: myRef11, inView: visible11} = useInView({
    "threshold"  : 0,
    "triggerOnce": true,
  });
  const {ref: myRef12, inView: visible12} = useInView({
    "threshold"  : 0,
    "triggerOnce": true,
  });
  const {ref: myRef13, inView: visible13} = useInView({
    "threshold"  : 0,
    "triggerOnce": true,
  });
  const {ref: myRef14, inView: visible14} = useInView({
    "threshold"  : 0,
    "triggerOnce": true,
  });
  const {ref: myRef15, inView: visible15} = useInView({
    "threshold"  : 0,
    "triggerOnce": true,
  });
  const {ref: myRef16, inView: visible16} = useInView({
    "threshold"  : 0,
    "triggerOnce": true,
  });
  const {ref: myRef17, inView: visible17} = useInView({
    "threshold"  : 0,
    "triggerOnce": true,
  });
  const {ref: myRef18, inView: visible18} = useInView({
    "threshold"  : 0,
    "triggerOnce": true,
  });
  const {ref: myRef19, inView: visible19} = useInView({
    "threshold"  : 0,
    "triggerOnce": true,
  });
  const {ref: myRef20, inView: visible20} = useInView({
    "threshold"  : 0,
    "triggerOnce": true,
  });
  const {ref: myRef21, inView: visible21} = useInView({
    "threshold"  : 0,
    "triggerOnce": true,
  });
  const {ref: myRef22, inView: visible22} = useInView({
    "threshold"  : 0,
    "triggerOnce": true,
  });
  const ContactUs = "Contact us".split("");
  
  
  return (
     <div className="WorkBlock">
       <div className="headBlock">
         <p ref={myRef1} className={`header ${visible1 ? "scrollAnimation" : ""}`}>The First Super-App</p>
         <div ref={myRef2} className={`prg ${visible2 ? "scrollAnimation" : ""}`}>
           For several years we’ve been helping Punto Pago explore new digital marketing niches. During this time they
           have worked their way from being a utility bills payment service to launching a superapp as well as a whole
           Punto Pago ecosystem with bank cards, loans, payments and a marketplace.
         </div>
       </div>
       
       <img ref={myRef3} className={`fullImage ${visible3 ? "scrollAnimation" : ""}`} src={img1} alt=""/>
       
       <div className="FirstBlock">
         <p ref={myRef4} className={`miniHeader ${visible4 ? "scrollAnimation" : ""}`}>Customers' goal / challenge</p>
         <p ref={myRef5} className={`prg ${visible5 ? "scrollAnimation" : ""}`}>The Customer is developing a complex
           product in the e-finance domain that allows users to
           keep all necessary banking functionality in one app. The Futuro Team had to redone and significantly improve
           the fundamental web part with the new functionality, develop a mobile application for prepaid card programs,
           and then integrate them together.</p>
         
         
         <div className="imgTechStack">
           <img ref={myRef6} className={`halfImage ${visible6 ? "scrollAnimation" : ""}`} src={img1} alt=""/>
           <div className="TextBlock">
             <p ref={myRef7} className={`miniHeader ${visible7 ? "scrollAnimation" : ""}`}>Tech stack</p>
             <p ref={myRef8} className={`item ${visible8 ? "scrollAnimation" : ""}`}>Node.js </p>
             <p ref={myRef8} className={`item ${visible8 ? "scrollAnimation" : ""}`}>React.js</p>
             <p ref={myRef8} className={`item ${visible8 ? "scrollAnimation" : ""}`}>AWS</p>
             <p ref={myRef9} className={`item ${visible9 ? "scrollAnimation" : ""}`}>React Native</p>
             <p ref={myRef9} className={`item ${visible9 ? "scrollAnimation" : ""}`}>Twillio</p>
             <p ref={myRef9} className={`item ${visible9 ? "scrollAnimation" : ""}`}>ASP .NET</p>
           
           </div>
         </div>
         
         <img ref={myRef10} className={`image90 ${visible10 ? "scrollAnimation" : ""}`} src={img1} alt=""/>
       
       </div>
       
       
       <div className="secondBlockText">
         <p ref={myRef11} className={`miniHeader ${visible11 ? "scrollAnimation" : ""}`}>Product develop and
           Objectives</p>
         <p ref={myRef12} className={`prg ${visible12 ? "scrollAnimation" : ""}`}>Our initial task was a full rebranding
           and creating a mobile app with an average load of
           500k users per day. Punto Pago required a new strategy as they were moving towards being a multifunctional
           app. Users needed to be able to check their account status and make a payment at any time. The mobile app
           made it possible identifying the existing clients as well as attracting new ones.</p>
       </div>
       
       
       <div className="thirdBlocks">
         <div className="eachBlock">
           <img ref={myRef13} className={`${visible13 ? "scrollAnimation" : ""}`} src={img1} alt=""/>
           <p ref={myRef14} className={`underText ${visible14 ? "scrollAnimation" : ""}`}>Complete brand overhaul and
             development of a new strategy</p>
         </div>
         
         <div className="eachBlock">
           <img ref={myRef15} className={`${visible15 ? "scrollAnimation2" : ""}`} src={img1} alt=""/>
           <p ref={myRef16} className={`underText ${visible16 ? "scrollAnimation2" : ""}`}>Redesigning terminals for
             paying bills in stores, business centers, and hotel</p>
         </div>
       </div>
       
       <div className="secondBlockText">
         <p ref={myRef17} className={`miniHeader ${visible17 ? "scrollAnimation" : ""}`}>Multi-service platform and
           fintech app</p>
         <p ref={myRef18} className={`prg ${visible18 ? "scrollAnimation" : ""}`}>Punto Pago provides multiple services,
           including payments, spendings control and fast
           delivery marketplace. We have explored the best scaling options considering growth and focused on not just
           consumer numbers, but transaction numbers.</p>
       </div>
       
       <img ref={myRef19} className={`img90 ${visible19 ? "scrollAnimation" : ""}`} src={img1} alt=""/>
       <img ref={myRef20} className={`img90 ${visible20 ? "scrollAnimation2" : ""}`} src={img1} alt=""/>
       
       
       <div className="ContactBlock">
         <p ref={myRef21} className={`ContactHeader ${visible21 ? "scrollAnimation" : ""}`}>Would like the same project?</p>
         <Link onClick={() => window.scrollTo(0, 0)} ref={myRef22} to="/contact"
               className={`contactUsBtn G-alignItems-center ${visible22 ? "scrollAnimation2" : ""}`}>
           <div className="textBlock">
             <div className="textLine G-alignItems-center">
               {ContactUs.map((el) => {
                 if (el !== " ") {
                   return (<div className="letter">{el}</div>);
                 } else {
                   return (<div className="space"></div>);
                 }
               })}
             </div>
             <div className="textLine G-alignItems-center">
               {ContactUs.map((el) => {
                 if (el !== " ") {
                   return (<div className="letter">{el}</div>);
                 } else {
                   return (<div className="space"></div>);
                 }
               })}
             </div>
           </div>
           
           <div className="middleLine"></div>
           
           <div className="arrowBlock">
             <img src={Arrow} alt=""/>
             <img src={Arrow} alt=""/>
           </div>
         
         </Link>
       
       </div>
     
     </div>
  );
}

export default WorkBlock;