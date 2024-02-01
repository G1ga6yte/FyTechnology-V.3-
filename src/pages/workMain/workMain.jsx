import React, {useState} from "react";
import "./workMain.scss"
import imgTop from "./6.png"
import imgMiddle from "./1.png"
import imgBottom from "./4.png"
import copyIcon from "./copy-03.svg"
import {useInView} from "react-intersection-observer";

function WorkMain (){
  const Mail = "fytech@hire.com"
  const [copied, setCopied] = useState(false)
  
  const copyToClipboard = () => {
    setCopied(true)
  
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = Mail;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextArea);
    setTimeout(()=>{
      setCopied(false)
    }, 3000)
  };
  
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
  
  return(
     <div className="WorkMain">
        <div className="contentBlock">
          <p ref={myRef1} className={`header ${visible1 ? "scrollAnimation" : ""}`}>Work at FyTechnology</p>
          <p ref={myRef2} className={`prg ${visible2 ? "scrollAnimation" : ""}`}>We're seeking rocket-fueled minds who shatter glass ceilings and leave the competition in their dust. If you're an idea machine with the drive of a bulldozer, we've got the launchpad for your dreams.</p>
          <div className="mainBlock">
            <div className="leftLine">
              <p ref={myRef3} className={`roles ${visible3 ? "scrollAnimation" : ""}`}>Nothing</p>
              <img className="imgBottom" src={imgBottom} alt=""/>
            </div>
            <div className="rightLine">
              <p ref={myRef4} onClick={copyToClipboard} className={`prgLink ${visible4 ? "scrollAnimation2" : ""}`}>Send your resume to <span>{Mail} <img src={copyIcon} alt=""/> <span style={{display: `${copied ? "block" : "none"}`}} className="copiedText">Copied !</span></span></p>
            </div>
          </div>
        </div>
  
       <img src={imgTop} className="imgTop" alt=""/>
       <img src={imgMiddle} className="imgMiddle" alt=""/>

     </div>
  )
}

export default WorkMain