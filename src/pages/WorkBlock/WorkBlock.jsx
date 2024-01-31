import React from "react";
import "./workBlock.scss";

// import img1 from "./Rectangle 7.png";
import {useInView} from "react-intersection-observer";
import {Link} from "react-router-dom";
import Arrow from "../navigation/images/arrow-narrow-right.svg";


import img1 from "./images/1.png";
import img2 from "./images/2.png";
import img3 from "./images/3.png";
import img4 from "./images/4.png";
import img5 from "./images/5.png";
import img6 from "./images/6.png";
import img7 from "./images/7.png";


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
         <p ref={myRef1} className={`header ${visible1 ? "scrollAnimation" : ""}`}>Driving Innovation: Carfy - Your
           All-in-One Automotive Companion</p>
         <div ref={myRef2} className={`prg ${visible2 ? "scrollAnimation" : ""}`}>
           In our relentless pursuit of transforming the automotive service landscape, our dedicated team of four
           professionals has meticulously crafted Carfy—an advanced application poised to redefine the industry. Beyond
           being just an app, Carfy represents a sophisticated solution designed to streamline processes for both
           clients and automotive service providers.
         </div>
       </div>
       
       <img ref={myRef3} className={`fullImage ${visible3 ? "scrollAnimation" : ""}`} src={img1} alt=""/>
       
       <div className="FirstBlock">
         <p ref={myRef4} className={`miniHeader ${visible4 ? "scrollAnimation" : ""}`}>A Holistic Suite of Automotive
           Solutions:</p>
         <p ref={myRef5} className={`prg ${visible5 ? "scrollAnimation" : ""}`}>Carfy offers a seamless experience,
           providing users with the ability to effortlessly book car service appointments, access comprehensive car
           histories for informed decision-making, make secure online payments for vignettes, and utilize a
           state-of-the-art car insurance calculator for personalized coverage options. Additionally, users can find
           immediate assistance on the road, stay informed through a curated blog, and enjoy the convenience of both a
           mobile app and a web version.</p>
         
         
         <div className="imgTechStack">
           <img ref={myRef6} className={`halfImage ${visible6 ? "scrollAnimation" : ""}`} src={img2} alt=""/>
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
         
         <img ref={myRef10} className={`image90 ${visible10 ? "scrollAnimation" : ""}`} src={img3} alt=""/>
       
       </div>
       
       
       <div className="secondBlockText">
         <p ref={myRef11} className={`miniHeader ${visible11 ? "scrollAnimation" : ""}`}>Efficient Garage Management and
           Marketplace Integration:</p>
         <p ref={myRef12} className={`prg ${visible12 ? "scrollAnimation" : ""}`}>Our initial task was a full rebranding
           Carfy's virtual garage management feature empowers users to effortlessly add and manage vehicles, while
           automotive service businesses can leverage a dynamic web page with a robust dashboard. This enables efficient
           appointment management, service tracking, and seamless client engagement. The inclusion of a marketplace with
           detailed car listings further enriches the user experience, offering a one-stop destination for automotive
           needs.</p>
       </div>
       
       
       <div className="thirdBlocks">
         <div className="eachBlock">
           <img ref={myRef13} className={`${visible13 ? "scrollAnimation" : ""}`} src={img4} alt=""/>
           <p ref={myRef14} className={`underText ${visible14 ? "scrollAnimation" : ""}`}>Complete brand overhaul and
             development of a new strategy</p>
         </div>
         
         <div className="eachBlock">
           <img ref={myRef15} className={`${visible15 ? "scrollAnimation2" : ""}`} src={img5} alt=""/>
           <p ref={myRef16} className={`underText ${visible16 ? "scrollAnimation2" : ""}`}>Redesigning terminals for
             paying bills in stores, business centers, and hotel</p>
         </div>
       </div>
       
       <div className="secondBlockText">
         <p ref={myRef17} className={`miniHeader ${visible17 ? "scrollAnimation" : ""}`}>From Concept to a
           Multi-functional Reality:</p>
         <p ref={myRef18} className={`prg ${visible18 ? "scrollAnimation" : ""}`}>Our journey began with a simple yet
           powerful concept: to simplify processes for both clients and automotive service providers. After a year of
           unwavering dedication, we proudly introduce Carfy—an application that not only meets but exceeds
           expectations. Carfy stands out in the EU market as a multifunctional powerhouse, offering a unique blend of
           services with no direct competition.</p>
         <p ref={myRef18} className={`prg ${visible18 ? "scrollAnimation" : ""}`}>Explore the future of automotive services with Carfy—a name synonymous with innovation, efficiency, and a commitment to making every journey a seamless experience.</p>
       
       </div>
       
       <img ref={myRef19} className={`img90 ${visible19 ? "scrollAnimation" : ""}`} src={img6} alt=""/>
       <img ref={myRef20} className={`img90 ${visible20 ? "scrollAnimation2" : ""}`} src={img7} alt=""/>
       
       
       <div className="ContactBlock">
         <p ref={myRef21} className={`ContactHeader ${visible21 ? "scrollAnimation" : ""}`}>Would like the same
           project?</p>
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