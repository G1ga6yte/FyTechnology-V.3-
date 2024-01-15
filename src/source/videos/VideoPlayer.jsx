import React, {useEffect, useState} from "react";
import {useCartContext} from "../../pages/Home/homeHead/CartContext";

function VideoPlay (){
  const [percent, setPercent] = useState(1)
  const [timing, setTiming] = useState(40)
  
  
  
  useEffect(()=>{
    
    if (percent < 100){
      if (percent > 80 && percent < 93){
        setTiming(80)
      }
      if (percent > 92 && percent <100){
        setTiming(160)
        if (percent  === 99){
          setTiming(100000000)
        }
      }
      
      setTimeout(()=>{
        setPercent(prev => prev+1)
      }, timing)
    }
    
  }, [percent])
  
  
  
  return (
     <div style={{backgroundColor: "white",  zIndex: 2000}} className="VideoLoadingBlock">
       <div className="LoadingWord">
         Loading
         <span></span>
         <span></span>
         <span></span>
       </div>
       
       <div className="LoadTo100">
         {percent}<span>%</span>
       </div>
       
       <video  loop autoPlay muted className="videoLoading">
         <source type="video/mp4" src={require('./Comp-loading.webm')} />
       </video>
     </div>
  )
}

export default VideoPlay