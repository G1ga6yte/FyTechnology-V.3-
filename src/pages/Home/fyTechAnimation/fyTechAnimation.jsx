import React, {useState} from "react";
import "./fyTechAnimation.scss";

import fyTechLogo from "./Union.svg";

function FyTechAnimation() {
  const [logoFix, setLogoFix] = useState("relative");
  const [logoBottom, setLogoBottom] = useState(-30);
  const [logoScale, setLogoScale] = useState(0.5);
  
  const [firstNameTransform, setFirstNameTransform] = useState(150);
  const [firstNameLine, setFirstNameLine] = useState(0);
  const [firstNameLineOpc, setFirstNameLineOpc] = useState(1);
  
  const [gradient, setGradient] = useState("none")
  const [textBlockTransform, setTextBlockTransform] = useState(1500)
  
  const [gradientBlock, setGradientBlock] = useState(500)
  const [displayImg, setDisPlayImg] = useState("block")
  
  const [mainScale, setMainScale] = useState(1)
  const [mainLeft, setMainLeft] = useState(50)
  
  window.addEventListener("scroll", function () {
    if (this.scrollY >= 6500) {
      setLogoFix("fixed");
    } else {
      setLogoFix("relative");
    }
    
    
    if (this.scrollY >= 7000 && this.scrollY <= 7800) {
      let bottom = -30 + ((80 / 800) * (this.scrollY - 7000));
      let scale = 0.5 + ((0.5 / 800) * (this.scrollY - 7000));
      setLogoBottom(bottom);
      setLogoScale(scale);
    }
    if (this.scrollY >= 7800 && this.scrollY <= 9000) {
      let scale = 1 + ((4.5 / 1200) * (this.scrollY - 7800));
      setLogoScale(scale);
    }
    
    if (this.scrollY >= 7900 && this.scrollY <= 8500) {
      let transform = 150 - ((150 / 600) * (this.scrollY - 7900));
      setFirstNameTransform(transform);
    }
    if (this.scrollY >= 8500 && this.scrollY <= 9500) {
      let transform = ((400 / 1000) * (this.scrollY - 8500));
      let opc = 1 - ((1 / 1000) * (this.scrollY - 8500));
      setFirstNameLine(transform);
      setFirstNameLineOpc(opc);
    }
    
    if (this.scrollY >= 8900 && this.scrollY <= 14000){
      let gradient = "block"
      setGradient(gradient)
    } else{
      setGradient("none")
    }
    
    if (this.scrollY >= 9000 && this.scrollY <= 15000){
      let transform = 1500-((14500/6000) * (this.scrollY-9000))
      setTextBlockTransform(transform)
    }
    
    if (this.scrollY >= 13500 && this.scrollY <= 14000){
      let gradientBlock = 500-((380/500)* (this.scrollY-13500))
      setGradientBlock(gradientBlock)
    }
    
    if (this.scrollY >= 14000){
      setDisPlayImg("none")
    } else {
      setDisPlayImg("block")
    }
    
    if (this.scrollY >= 14000 && this.scrollY <= 15000){
      let scalee =1- ((1/1000)*(this.scrollY-14000))
      let left = 50 + ((100/1000)*(this.scrollY-14000))
      
      setMainLeft(left)
      setMainScale(scalee)
    }
    
  });
  
  
  return (<div className="FyTechAnimation">
  
    
    
    
    
    <div style={{position: `${logoFix}`, bottom: `${logoBottom}%`, left: `${mainLeft}%`, scale: `${mainScale}`}} className="logoBlock">
      <img src={fyTechLogo} style={{transform: `scale(${logoScale})`, display: displayImg}} className="fyTechLogo" alt=""/>
      
      <div style={{transform: `translateX(${firstNameTransform}%)`}} className="firstName">
        <p style={{transform: `translateY(-${firstNameLine}%)`, opacity: firstNameLineOpc}}
           className="startName">Values we</p>
        <p style={{transform: `translateY(${firstNameLine}%)`, opacity: firstNameLineOpc}}
           className="startName">stand for</p>
      </div>
  
      <div style={{display: gradient}} className="gradientL">
      </div>
  
      <div style={{display: gradient}} className="gradientR">
      </div>
      
      <div style={{bottom: `-${gradientBlock}%`}} className="GradientBlock">
      </div>
      
      <div style={{transform: `translateX(${textBlockTransform}px)`}} className="TextCont">
        <div className="TextBlock">
          <p className="header">We create, not just deliver</p>
          <p className="prg">We put limitless imagination to work. We believe that enjoyment of creation goes hand in
            hand with producing truly great products. We create trends - not just follow them.</p>
        </div>
  
        <div className="TextBlock">
          <p className="header">We strive for excellence</p>
          <p className="prg">We never settle for good enough, and we are always looking for new ways to improve our products and services. We believe that excellence is possible, and we are not afraid to set high goals</p>
        </div>
  
        <div className="TextBlock">
          <p className="header">We create the future</p>
          <p className="prg">We are always thinking about the future and how we can make the world a better place. We believe that technology can change the world for the better, and we strive to use our technology to solve global problems.</p>
        </div>
  
        <div className="TextBlock">
          <p className="header">We are purpose-driven</p>
          <p className="prg">We believe that every business should have a purpose beyond making money. We strive to use our business to make a positive impact on the world and to leave a lasting legacy</p>
        </div>
  
        <div className="TextBlock">
          <p className="header">We work together</p>
          <p className="prg">We believe in the power of collaboration and teamwork. We strive to create an inclusive and positive work environment where everyone can contribute</p>
        </div>
  
        <div className="TextBlock">
          <p className="header">We are honest and transparent</p>
          <p className="prg">We are always honest in our dealings with customers, partners, and employees. We believe that honesty and transparency are the foundation of trust</p>
        </div>
      </div>
    </div>
  
  </div>);
}

export default FyTechAnimation;