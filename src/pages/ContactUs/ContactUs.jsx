import React, {useEffect, useState} from "react";
import "./ContactUs.scss";
import {render} from "react-dom";
import Arrow from "../navigation/images/arrow-narrow-right.svg";
import {Link} from "react-router-dom";
import {useInView} from "react-intersection-observer";
import {useNavigate} from 'react-router-dom';


import imgClose from "./x-close.svg"
function ContactUs (){
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  
  
  const [hasFocus1, setFocus1] = useState(false);
  const [input1, setInput1] = useState("")
  const [hasFocus2, setFocus2] = useState(false);
  const [input2, setInput2] = useState("")
  const [hasFocus3, setFocus3] = useState(false);
  const [input3, setInput3] = useState("")
  const [activating, setActivating] = useState(false)
  
  const [services, setServices] = useState([
    {name: "Software development", val: true},
    {name: "IT infrastructure", val: true},
    {name: "IT consulting and strategy", val: true},
    {name: "IT maintenance and support", val: false},
    {name: "Big Data and Analytics", val: false},
    {name: "Integration of new technologies", val: false},
    {name: "Full-service accounting services", val: false},
    {name: "Software Testing and Quality Assurance", val: false},
    {name: "Common IT design services include", val: false},
    {name: "Contract drafting and review", val: false},
    {name: "Legal research and writing", val: false},
    {name: "Preparing legal memoranda and opinions", val: false},
    {name: "Corporate Governance and Advice", val: false},
    {name: "Employment law and HR services", val: false},
    {name: "Advanced services", val: false},
    {name: "Web 3", val: false},
  ])
  
  
  const [price, setPrice] = useState([
    {name: "Under $10K", val: true},
    {name: "$10K-20K", val: false},
    {name: "$20K-50K", val: false},
    {name: "$50K-100K", val: false},
    {name: "Over $100K", val: false},
  ])
  
  const [deadLine, setDeadLine] = useState("")
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
  
  const {ref: myRef8, inView: visible8} = useInView({
    "threshold": 0,
    "triggerOnce": true
  })
  const {ref: myRef9, inView: visible9} = useInView({
    "threshold": 0,
    "triggerOnce": true
  })
  const {ref: myRef10, inView: visible10} = useInView({
    "threshold": 0,
    "triggerOnce": true
  })
  const {ref: myRef11, inView: visible11} = useInView({
    "threshold": 0,
    "triggerOnce": true
  })
  const {ref: myRef12, inView: visible12} = useInView({
    "threshold": 0,
    "triggerOnce": true
  })
  const {ref: myRef13, inView: visible13} = useInView({
    "threshold": 0,
    "triggerOnce": true
  })
  const {ref: myRef14, inView: visible14} = useInView({
    "threshold": 0,
    "triggerOnce": true
  })
  
  let Submit = "Submit".split('')
  const Instagram = "Instagram".split('')
  const Twitter = "Twitter/X".split('')
  const Behance = "Behance".split('')
  const Linkedin = "LinkedIn".split('')
  
  
  return(
     <div className="ContactUS G-flex-between">
       <div onClick={()=>{
         goBack()
         window.scrollTo(0, 0)
       }} className="closeButton">
         <img src={imgClose} alt=""/>
       </div>
       
        <div className="FilingBlock">
          <div ref={myRef8} className={`inputBlock ${visible8 ? "scrollAnimation" : ""}`}>
            <span className={`${hasFocus1 ? "active" : ""} ${input1 !== "" ? "active" : ""}`}>Your name</span>
            <input onFocus={() => setFocus1(true)}
                   onBlur={() => setFocus1(false)}
                   onChange={(event)=> setInput1(event.target.value)}
                   className="Input" type="text"/>
          </div>
  
          <div ref={myRef9} className={`inputBlock ${visible9 ? "scrollAnimation" : ""}`}>
            <span className={`${hasFocus2 ? "active" : ""} ${input2 !== "" ? "active" : ""}`}>Your email</span>
            <input onFocus={() => setFocus2(true)}
                   onBlur={() => setFocus2(false)}
                   onChange={(event)=> setInput2(event.target.value)}
                   className="Input" type="text"/>
          </div>
  
          <div ref={myRef10} className={`inputBlockArea ${visible10 ? "scrollAnimation" : ""}`}>
            <span className={`${hasFocus3 ? "active" : ""} ${input3 !== "" ? "active" : ""}`}>Write a short description of your project</span>
            <textarea onFocus={() => setFocus3(true)}
                      onBlur={() => setFocus3(false)}
                      onChange={(event)=> setInput3(event.target.value)}
                      name="desc" id="desc" cols="30" rows="5" className="area">
              
            </textarea>
          </div>
          
          <div className="choseServices">
            <p ref={myRef11} className={`prg ${visible11 ? "scrollAnimation" : ""}`}>What services do you need?</p>
  
            {services.map((el)=>{
              return(
                 <div onClick={()=>{
                   let data = services
                   function changeVal (ell){
                     if (ell.name === el.name){
                       ell.val = !ell.val
                     }
                   }
                   data.find(changeVal)
                   setServices(data)
                   setActivating(prev => !prev)
  
                 }} className={`serviceItem ${el.val ? "activeItem" : ""}`}>
                   {el.name}
                 </div>
              )
            })}
            
            <div className="serviceItem">Software development</div>
          </div>
          
          <div className="budgetBlock">
            <p ref={myRef12} className={`prg ${visible12 ? "scrollAnimation" : ""}`}>What is your budget?</p>
            <div className="line">
              {price.map((el)=>{
                return(
                   <div onClick={()=>{
                     let data = price
                     data.map((ell)=>ell.val = false)
                     function changeVal (ell){
                       if (ell.name === el.name){
                         ell.val = !ell.val
                       }
                     }
                     data.find(changeVal)
                     setPrice(data)
                     setActivating(prev => !prev)
                   }} className={`circle ${el.val ? "active" : ""}`}>
                     <span className="price">{el.name}</span>
                   </div>
                )
              })}
            </div>
            
          </div>
          
          <div className="deadLine">
            <p ref={myRef13} className={`deadLine ${visible13 ? "scrollAnimation" : ""}`}>Do you have a deadline?</p>
            <div className="buttons">
                <div onClick={()=>setDeadLine("yes")} className={`button ${deadLine === "yes" ? "active" : ""}`}>Yes</div>
              <div onClick={()=>setDeadLine("No, no rush")} className={`button ${deadLine === "No, no rush" ? "active" : ""}`}>No, no rush</div>
              <div onClick={()=>setDeadLine("No, but Asap")} className={`button ${deadLine === "No, but Asap" ? "active" : ""}`}>No, but Asap</div>
            </div>
          </div>
  
          <Link  onClick={()=>window.scrollTo(0, 0)} ref={myRef3} to="/home" className={`contactUsBtn G-alignItems-center ${visible3 ? "scrollAnimation2" : ""}`}>
            <div className="textBlock">
              <div className="textLine G-alignItems-center">
                {Submit.map((el)=>{
                  if (el !== ' '){
                    return(<div className="letter">{el}</div>)
                  } else {
                    return (<div className="space"></div>)
                  }
                })}
              </div>
              <div className="textLine G-alignItems-center">
                {Submit.map((el)=>{
                  if (el !== ' '){
                    return(<div className="letter">{el}</div>)
                  } else {
                    return (<div className="space"></div>)
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
       
       <div className="TextLinks">
         <p ref={myRef14} className={`prg ${visible14 ? "scrollAnimation" : ""}`}>
           Our experts have extensive experience in the design industry. We guarantee high-quality services and individual approach to each client.
         </p>
  
         <div className="linksLine">
           <a  ref={myRef4} target={"_blank"} href="https://www.instagram.com/fytechnology/" className={`Link G-alignItems-center ${visible4 ? "scrollAnimation2" : ""}`}>
             <div className="textBlock">
               <div className="textLine G-alignItems-center">
                 {Instagram.map((el)=>{
                   if (el !== ' '){
                     return(<div className="letter">{el}</div>)
                   } else {
                     return (<div className="space"></div>)
                   }
                 })}
               </div>
               <div className="textLine G-alignItems-center">
                 {Instagram.map((el)=>{
                   if (el !== ' '){
                     return(<div className="letter">{el}</div>)
                   } else {
                     return (<div className="space"></div>)
                   }
                 })}
               </div>
             </div>
           </a>
           <a ref={myRef5} href="" className={`Link G-alignItems-center ${visible5 ? "scrollAnimation2" : ""}`}>
             <div className="textBlock">
               <div className="textLine G-alignItems-center">
                 {Twitter.map((el)=>{
                   if (el !== ' '){
                     return(<div className="letter">{el}</div>)
                   } else {
                     return (<div className="space"></div>)
                   }
                 })}
               </div>
               <div className="textLine G-alignItems-center">
                 {Twitter.map((el)=>{
                   if (el !== ' '){
                     return(<div className="letter">{el}</div>)
                   } else {
                     return (<div className="space"></div>)
                   }
                 })}
               </div>
             </div>
           </a>
           <a ref={myRef6} href="" className={`Link G-alignItems-center ${visible6 ? "scrollAnimation2" : ""}`}>
             <div className="textBlock">
               <div className="textLine G-alignItems-center">
                 {Behance.map((el)=>{
                   if (el !== ' '){
                     return(<div className="letter">{el}</div>)
                   } else {
                     return (<div className="space"></div>)
                   }
                 })}
               </div>
               <div className="textLine G-alignItems-center">
                 {Behance.map((el)=>{
                   if (el !== ' '){
                     return(<div className="letter">{el}</div>)
                   } else {
                     return (<div className="space"></div>)
                   }
                 })}
               </div>
             </div>
           </a>
           <a ref={myRef7} href="" className={`Link G-alignItems-center ${visible7 ? "scrollAnimation2" : ""}`}>
             <div className="textBlock">
               <div className="textLine G-alignItems-center">
                 {Linkedin.map((el)=>{
                   if (el !== ' '){
                     return(<div className="letter">{el}</div>)
                   } else {
                     return (<div className="space"></div>)
                   }
                 })}
               </div>
               <div className="textLine G-alignItems-center">
                 {Linkedin.map((el)=>{
                   if (el !== ' '){
                     return(<div className="letter">{el}</div>)
                   } else {
                     return (<div className="space"></div>)
                   }
                 })}
               </div>
             </div>
           </a>
  
         </div>
       </div>
     </div>
  )
}

export default ContactUs