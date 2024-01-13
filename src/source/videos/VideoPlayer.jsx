import React, {useEffect, useState} from "react";
import {useCartContext} from "../../pages/Home/homeHead/CartContext";

function VideoPlay (){
  const [percent, setPercent] = useState(1)
  const [timing, setTiming] = useState(50)
  
  
  
  useEffect(()=>{
    
    if (percent < 100){
      if (percent > 80 && percent < 93){
        setTiming(100)
      }
      if (percent > 92 && percent <100){
        setTiming(200)
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
     <div className="VideoLoadingBlock">
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