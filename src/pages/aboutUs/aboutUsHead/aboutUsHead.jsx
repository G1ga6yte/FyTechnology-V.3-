import React from 'react'
import './aboutUsHead.scss'
import { useInView } from 'react-intersection-observer'
import bck2 from '../images/bck1.png'
import bck1 from '../images/bck2.png'

import water1 from "../images/water1.png"
import water2 from "../images/water2.png"
import water3 from "../images/water3.png"

function AboutUsHead() {
  const { ref: myRef1, inView: visible1 } = useInView()
  const { ref: myRef2, inView: visible2 } = useInView()
  const { ref: myRef3, inView: visible3 } = useInView()
  const { ref: myRef4, inView: visible4 } = useInView()
  const { ref: myRef5, inView: visible5 } = useInView()
  const { ref: myRef6, inView: visible6 } = useInView()
  const { ref: myRef7, inView: visible7 } = useInView()
  const { ref: myRef8, inView: visible8 } = useInView()
  
  
  
  return (
    <div className='aboutUsHead'>
  
      <img className="water1 bubbleAnim" src={water1} alt='' />
      <img className="water2 bubbleAnim" src={water2} alt='' />
      <img className="water3 bubbleAnim" src={water3} alt='' />
  
  
      <div className='headerBlock'>
        <div className='borderBlock'>
        </div>
        <p ref={myRef1} className={`header ${visible1 ? 'scrollAnimation' : ''}`}>About Us</p>
      </div>
      
      <div className='CardBlock G-flex-between'>
        <div className='TextCard'>
          <div style={{ backgroundImage: `url("${bck1}")` }} className='headCard'>
            <p ref={myRef2} className={`CardHeader ${visible2 ? "scrollAnimation" : ""}`}>Who we are</p>
            <p ref={myRef3} className={`prg ${visible3 ? "scrollAnimation" : ""}`}>FyTechnology is a web development, design, and software agency that helps businesses of
              all
              sizes create successful digital products. We work with clients in a variety of industries, including
              education, healthcare, and government.</p>
            <div className='descBlock'>
              <p ref={myRef4} className={`desc ${visible4 ? "scrollAnimation" : ""}`}>Our team operates in more than 10 countries </p>
              <p ref={myRef4} className={`desc ${visible4 ? "scrollAnimation2" : ""}`}>In 8 time zone</p>
            </div>
          </div>
          
          <div className='textBlock1'>
            <p ref={myRef5} className={`textHeader ${visible5 ? "scrollAnimation" : ""}`}>Launching new products for enterprises</p>
            <p ref={myRef6} className={`textPrg ${visible6 ? "scrollAnimation" : ""}`}>For the last 1 years we saved over $400.000 for our enterprise customers.</p>
          </div>
          
          <div className='textBlock2'>
            <p ref={myRef7} className={`textHeader ${visible7 ? "scrollAnimation2" : ""}`}>We make money for startups.</p>
            <p ref={myRef8} className={`textPrg ${visible8 ? "scrollAnimation2" : ""}`}>Last 1 years over $1.00.000 clients’ investment.</p>
          </div>
        
        
        </div>
        
        <div style={{ backgroundImage: `url("${bck2}")` }} className='imgCard'></div>
      </div>
    </div>
  )
}

export default AboutUsHead