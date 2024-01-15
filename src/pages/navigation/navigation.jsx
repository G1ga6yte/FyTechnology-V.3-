import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./navigation.scss"

import FytechLogo from "./images/Group 1261152794.svg"
import MenuOpen from "./images/menu-01.svg"
import MenuClose from "./images/x-close.svg"
import Arrow from "./images/arrow-narrow-right.svg"
import ArrowBlack from "./images/arrow-narrow-right-black.svg"
import mail from "./images/mail-02.svg"
import instagram from "./images/Company=Instagram.svg"

function Navigation (){
  let ContactUs = "Contact us".split('')
  let Projects = "Projects".split('')
  let AboutUs = "About us".split('')
  
  const [menuBar, setMenuBar] = useState(false)
  
  
  return(
     <div className="Navigation G-flex-between">
        <Link className="logoLink" to="/"><img src={FytechLogo} alt=""/></Link>
        <div className="buttonsBlock G-alignItems-center">
            <div  className="menuBtn">
              <img onClick={()=> setMenuBar(prev => !prev)} className="barImg" style={{display: `${menuBar ? "none" : "block"}`}} src={MenuOpen} alt=""/>
              <img onClick={()=> setMenuBar(prev => !prev)} className="barImg" style={{display: `${menuBar ? "block" : "none"}`}} src={MenuClose} alt=""/>
              
              <div style={{display: `${menuBar ? "block" : "none"}`}} className="menu G-flex-column">
                
                <Link onClick={()=>setMenuBar(false)} className="linkToPage" to="/">
                  <div className="textBlock">
                    <div className="textLine G-alignItems-center">
                      {Projects.map((el)=>{
                        if (el !== ' '){
                          return(<div className="letter">{el}</div>)
                        } else {
                          return (<div className="space"></div>)
                        }
                      })}
                    </div>
                    <div className="textLine G-alignItems-center">
                      {Projects.map((el)=>{
                        if (el !== ' '){
                          return(<div className="letter">{el}</div>)
                        } else {
                          return (<div className="space"></div>)
                        }
                      })}
                    </div>
                  </div>
  
                  <div className="arrowBlock">
                    <img src={ArrowBlack} alt=""/>
                    <img src={ArrowBlack} alt=""/>
                  </div>
  
                  <div className="hoverLineBlock">
                    <div className="line"></div>
                  </div>
                </Link>
                
                
  
                <Link onClick={()=>setMenuBar(false)} className="linkToPage" to="/aboutUs">
                  <div className="textBlock">
                    <div className="textLine G-alignItems-center">
                      {AboutUs.map((el)=>{
                        if (el !== ' '){
                          return(<div className="letter">{el}</div>)
                        } else {
                          return (<div className="space"></div>)
                        }
                      })}
                    </div>
                    <div className="textLine G-alignItems-center">
                      {AboutUs.map((el)=>{
                        if (el !== ' '){
                          return(<div className="letter">{el}</div>)
                        } else {
                          return (<div className="space"></div>)
                        }
                      })}
                    </div>
                  </div>
  
                  <div className="arrowBlock">
                    <img src={ArrowBlack} alt=""/>
                    <img src={ArrowBlack} alt=""/>
                  </div>
  
                  <div className="hoverLineBlock">
                    <div className="line"></div>
                  </div>
                </Link>
                
                <div className="OtherLinks G-alignItems-center">
  
                  <a onClick={()=>setMenuBar(false)} target='_blank' className="linkSite" href="https://www.instagram.com/fytechnology/">
                    <img src={instagram} alt=""/>
                  </a>
  
                  <a onClick={()=>setMenuBar(false)} target='_blank' className="linkSite" href="mailto:office@fytechnology.eu">
                    <img src={mail} alt=""/>
                  </a>
                  
                </div>
  
                
                
              </div>
            </div>
            
            <Link to="/contactUs" className="contactUsBtn G-alignItems-center">
              <div className="textBlock">
                <div className="textLine G-alignItems-center">
                    {ContactUs.map((el)=>{
                      if (el !== ' '){
                        return(<div className="letter">{el}</div>)
                      } else {
                        return (<div className="space"></div>)
                      }
                    })}
                </div>
                <div className="textLine G-alignItems-center">
                  {ContactUs.map((el)=>{
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
     
     </div>
  )
}

export default Navigation