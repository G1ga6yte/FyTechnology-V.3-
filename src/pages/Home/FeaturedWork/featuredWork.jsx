import React, {useState} from "react";
import "./featuredWork.scss"
import {useInView} from "react-intersection-observer";
import Component from "./component";
import {FeaturesData} from "./featuresData";

function FeaturedWork (){
  const {ref: useRef, inView: visibleEl} = useInView({
    "threshold": 0,
    "triggerOnce": true
  })
  
  const [circle, setCircle] = useState({
    width: 20,
    leftC: 50,
    bottom: 50
  })
  const [style1, setStyle1] = useState({
    scale: `0.15`,
    transform: `0`,
    left: `38`
  })
  const [style2, setStyle2] = useState({
    scale: `0.2`,
    transform: `0`,
    left: `35`
  })
  const [style3, setStyle3] = useState({
    scale: `0.2`,
    transform: `0`,
    left: `30`
  })
  const [style4, setStyle4] = useState({
    scale: `0.2`,
    transform: `0`,
    left: `32`
  })
  const [style5, setStyle5] = useState({
    scale: `0.2`,
    transform: `0`,
    left: `30`
  })
  const [style6, setStyle6] = useState({
    scale: `0.2`,
    transform: `0`,
    left: `30`
  })
  const [style7, setStyle7] = useState({
    scale: `0.2`,
    transform: `0`,
    left: `40`
  })
  const [style8, setStyle8] = useState({
    scale: `0.2`,
    transform: `0`,
    left: `60`
  })
  const [style9, setStyle9] = useState({
    scale: `0.2`,
    transform: `0`,
    left: `50`
  })
  
  const [contFixed, setContFixed] = useState('relative')
  window.addEventListener('scroll', function(){
    console.log(this.scrollY);
    if (this.scrollY >= 1300){
      setContFixed('fixed')
    } else {
      setContFixed('relative')
    }
    
    
    if (this.scrollY >=1300 && this.scrollY < 3300){
      let x
      if (this.scrollY>=1300 && this.scrollY <2700){
        x = -(800/1400) * (this.scrollY-1300)
      } else {
        x = -800+(200/600) * (this.scrollY-2700)
      }
      
      
      
      let y = 30- (100/2000) * (this.scrollY-1300)
      let z = 0.2 + (1.8/2000) * (this.scrollY-1300)
      
      setStyle3({
        scale: `${z}`,
        transform: `${x}`,
        left: `${y}`
      })
    }
    
    if (this.scrollY >=1350 && this.scrollY < 3350){
      let x
      if (this.scrollY>=1350 && this.scrollY <2350){
        x = -(700/1000) * (this.scrollY-1350)
      } else {
        x = -700+(200/1000) * (this.scrollY-2350)
      }
      
      
      
      let y = 35+ (100/2000) * (this.scrollY-1350)
      let z = 0.2 + (1.5/2000) * (this.scrollY-1350)
      
      setStyle2({
        scale: `${z}`,
        transform: `${x}`,
        left: `${y}`
      })
    }
    
    if (this.scrollY >=1320 && this.scrollY < 3320){
      let x
      if (this.scrollY>=1320 && this.scrollY <1920){
        x = -(700/600) * (this.scrollY-1320)
      } else {
        x = -700+(1100/1400) * (this.scrollY-1920)
      }
      
      
      
      let y = 38- (20/2020) * (this.scrollY-1320)
      let z = 0.15 + (1.2/2020) * (this.scrollY-1320)
      
      setStyle1({
        scale: `${z}`,
        transform: `${x}`,
        left: `${y}`
      })
    }
    
    if (this.scrollY >=1340 && this.scrollY < 3340){
      let x
      if (this.scrollY>=1340 && this.scrollY <1940){
        x = -(500/600) * (this.scrollY-1340)
      } else {
        x = -500+(800/1400) * (this.scrollY-1940)
      }
      
      
      
      let y = 32+ (60/2040) * (this.scrollY-1340)
      let z = 0.15 + (1.0/2040) * (this.scrollY-1340)
      
      setStyle4({
        scale: `${z}`,
        transform: `${x}`,
        left: `${y}`
      })
    }
    
    if (this.scrollY >=1800 && this.scrollY < 3800){
      let x
      if (this.scrollY>=1800 && this.scrollY <2800){
        x = -(800/1000) * (this.scrollY-1800)
      } else {
        x = -800+(500/1000) * (this.scrollY-2800)
      }
      
      
      
      let y = 30+ (120/2500) * (this.scrollY-1800)
      let z = 0.15 + (1.8/2500) * (this.scrollY-1800)
      
      setStyle5({
        scale: `${z}`,
        transform: `${x}`,
        left: `${y}`
      })
    }
    
    if (this.scrollY >=1700 && this.scrollY < 4200){
      let x
      if (this.scrollY>=1700 && this.scrollY <2800){
        x = -(800/1100) * (this.scrollY-1700)
      } else {
        x = -800+(700/900) * (this.scrollY-2800)
      }
      
      let z
      let y
      
      if (this.scrollY >=1700 && this.scrollY < 4100){
        y = 30- (40/2400) * (this.scrollY-1700)
        z = 0.15 + (1.6/2400) * (this.scrollY-1700)
      }
      
      setStyle6({
        scale: `${z}`,
        transform: `${x}`,
        left: `${y}`
      })
    }
    
    if (this.scrollY >=1750 && this.scrollY < 4350){
      let x
      if (this.scrollY>=1750 && this.scrollY <2750){
        x = -(700/1000) * (this.scrollY-1750)
      } else {
        x = -700+(1100/1600) * (this.scrollY-2750)
      }
      
      let z
      let y
      
      if (this.scrollY >=1750 && this.scrollY < 4350){
        y = 30+ (25/2600) * (this.scrollY-1750)
        z = 0.15 + (1.5/2600) * (this.scrollY-1750)
      }
      
      setStyle7({
        scale: `${z}`,
        transform: `${x}`,
        left: `${y}`
      })
    }
    
    if (this.scrollY >=1600 && this.scrollY < 3800){
      let x
      if (this.scrollY>=1600 && this.scrollY <2750){
        x = -(700/1150) * (this.scrollY-1600)
      } else {
        x = -700+(900/1000) * (this.scrollY-2750)
      }
      
      let z
      let y
      
      if (this.scrollY >=1600 && this.scrollY < 3800){
        y = 40+ (25/2200) * (this.scrollY-1600)
        z = 0.15 + (1.5/2200) * (this.scrollY-1600)
      }
      
      setStyle7({
        scale: `${z}`,
        transform: `${x}`,
        left: `${y}`
      })
    }
    
    if (this.scrollY >=1500 && this.scrollY < 3500){
      let x
      if (this.scrollY>=1500 && this.scrollY <2550){
        x = -(500/1050) * (this.scrollY-1500)
      } else {
        x = -500+(1000/950) * (this.scrollY-2550)
      }
      
      let z
      let y
      
      if (this.scrollY >=1500 && this.scrollY < 3500){
        y = 60+ (50/2000) * (this.scrollY-1500)
        z = 0.15 + (1.5/2000) * (this.scrollY-1500)
      }
      
      setStyle8({
        scale: `${z}`,
        transform: `${x}`,
        left: `${y}`
      })
    }
    
    if (this.scrollY >=1400 && this.scrollY < 3400){
      let x
      if (this.scrollY>=1400 && this.scrollY <2550){
        x = -(700/1150) * (this.scrollY-1400)
      } else {
        x = -700+(1200/850) * (this.scrollY-2550)
      }
      
      let z
      let y
      
      if (this.scrollY >=1400 && this.scrollY < 3400){
        y = 50- (50/2000) * (this.scrollY-1400)
        z = 0.15 + (1.5/2000) * (this.scrollY-1400)
      }
      
      setStyle9({
        scale: `${z}`,
        transform: `${x}`,
        left: `${y}`
      })
    }
    
    if (this.scrollY >=1300 && this.scrollY <2800){
      let x =20+ (830/1500)*(this.scrollY-1300)
      setCircle({
        width: x,
        leftC: 50,
        bottom: 50
      })
    }
    
    if (this.scrollY >= 3400 && this.scrollY < 4400){
      let x = 850+ (this.scrollY-3400)
      let y = 50+ (20/1000)*(this.scrollY-3400)
      let z = 50+ (650/1000)*(this.scrollY-3400)
      setCircle({
        width: x,
        leftC: y,
        bottom: z
      })
    }
    
  })
  
  return(
     <div className="FeaturedWork">
        <p ref={useRef} className={`header ${visibleEl ? "scrollAnimation" : ''}`}>Featured work</p>
  
  
       <div style={{left: `${circle.leftC}%`, bottom: `-${circle.bottom}px`}} className="circleCont">
         <div style={{width: `${circle.width}px`, height: `${circle.width}px`}} className="circle" ></div>
       </div>
  
       <div style={{position: contFixed}} className="worksCont">
    
         {/*<FeatureComponent style={style1} el={FeaturesData[0]}/>*/}
         {/*<FeatureComponent style={style2} el={FeaturesData[1]}/>*/}
         <Component  style={style5} el={FeaturesData[4]}/>
         <Component  style={style6} el={FeaturesData[5]}/>
         <Component  style={style7} el={FeaturesData[6]}/>
         <Component  style={style8} el={FeaturesData[7]}/>
    
         <Component  style={style9} el={FeaturesData[8]}/>
    
    
    
         <Component  style={style3} el={FeaturesData[2]}/>
         <Component  style={style2} el={FeaturesData[1]}/>
         <Component  style={style1} el={FeaturesData[3]}/>
         <Component  style={style4} el={FeaturesData[0]}/>
         
       </div>
     
     </div>
  )
}

export default FeaturedWork