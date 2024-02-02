import React, {useEffect, useState} from "react";
import "./loadingComponent.scss"

import stroke from "./Group 1261152795.svg"
import logo from "./Group 1261152795filled.svg"
function LoadingComponent (){
  const [percent, setPercent] = useState(1)
  const [timing, setTiming] = useState(45)
  const [tablet, setTablet] = useState(false)
  
  useEffect(()=>{
    if (window.innerWidth <=1096){
      setTablet(true)
    }
  }, [])
  
  useEffect(()=>{
    
    if (percent < 100){
      if (percent > 90 && percent < 97){
        setTiming(60)
      }
      if (percent > 92 && percent <100){
        setTiming(120)
        if (percent  === 99){
          setTiming(100000000)
        }
      }
      
      setTimeout(()=>{
        setPercent(prev => prev+1)
      }, timing)
    }
    
  }, [percent])
  
  
  return(
     <div style={{display: `${tablet ? "none" : "flex"}`}} className="loadingComponent2">
        <div className="logoBlock2">
          <div className="imgBlock2">
            <img src={stroke} className="imgStroke2" alt=""/>
            <div className="imgLogoBlock2">
              <img src={logo} className="imgLogo2" alt=""/>
            </div>
          </div>
          
          <div className="percentBlock">
            <div className="circle">
            </div>
            
            <p className="percentPrg">Build {percent}</p>
          </div>
          
        </div>
     </div>
  )
}

export default LoadingComponent