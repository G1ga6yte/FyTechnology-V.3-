import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './footer.scss'
import arrowRightTop from './arrow-narrow-up-right.svg'
import fuTech from './g20.svg'
import Arrow from '../navigation/images/arrow-narrow-right.svg'
import { useInView } from 'react-intersection-observer'
import { useCartContext } from '../../CartContext'
import Slider from 'react-slick'
import partner1 from '../Home/partnerSlide/1.svg'
import partner2 from '../Home/partnerSlide/2.svg'
import partner3 from '../Home/partnerSlide/3.svg'
import partner4 from '../Home/partnerSlide/4.svg'
import partner5 from '../Home/partnerSlide/5.svg'
import partner6 from '../Home/partnerSlide/6.svg'
import partner7 from '../Home/partnerSlide/7.svg'
import partner8 from '../Home/partnerSlide/8.svg'

function Footer() {
  const ContactUs = 'Contact us'.split('')
  const AboutUs = 'About us'.split('')
  const Services = 'Services'.split('')
  const Projects = 'Projects'.split('')
  
  const Instagram = 'Instagram'.split('')
  const Twitter = 'Twitter/X'.split('')
  const Behance = 'Behance'.split('')
  const Linkedin = 'LinkedIn'.split('')
  
  const FyTrading = 'FyTrading'.split('')
  const SaasSolution = 'Saas solution'.split('')
  
  const talkWithUs = 'Talk with us'.split('')
  
  
  const { ref: myRef1, inView: visible1 } = useInView()
  const { ref: myRef2, inView: visible2 } = useInView()
  const { ref: myRef3, inView: visible3 } = useInView()
  const { ref: myRef4, inView: visible4 } = useInView()
  const { ref: myRef9, inView: visible9 } = useInView()
  const { ref: myRef6, inView: visible6 } = useInView()
  const { ref: myRef7, inView: visible7 } = useInView()
  const { ref: myRef8, inView: visible8 } = useInView()
  
  function Call(el, el2) {
    const locat = useLocation()
    return el === locat.pathname
  }
  
  const { myRef5 } = useCartContext()
  const { ref: myRef, inView: visibleEl } = useInView()
  
  const [slidesToShow, setSlidesToShow] = useState(5)
  
  useEffect(() => {
    if (window.innerWidth <= 1600) {
      setSlidesToShow(4)
    }
    if (window.innerWidth <= 1200) {
      setSlidesToShow(3)
    }
    if (window.innerWidth <= 880) {
      setSlidesToShow(2)
    }
  }, [])
  const settings = {
    dots          : false,
    infinite      : true,
    speed         : 2000,
    slidesToShow  : slidesToShow,
    slidesToScroll: 1,
    autoplay      : true,
    easing        : 'linear',
    autoplaySpeed : 0
  }
  return (
    <div ref={myRef5} style={{
      display: `${Call('/contact') ? 'none' : 'flex'}`
      
    }} className='Footer'>
      
      <div
        style={{ display: `${window.innerWidth <= 992 ? 'none' : Call('/') ? 'block' : Call('/home') ? 'block' : 'none'}` }}
        className='sliderBlock'>
        <p ref={myRef} className={`header ${visibleEl ? 'scrollAnimation' : ''}`}>They Trust Us</p>
        
        <Slider {...settings}>
          
          <img src={partner1} alt='' />
          <img src={partner2} alt='' />
          <img src={partner3} alt='' />
          <img src={partner4} alt='' />
          <img src={partner5} alt='' />
          <img src={partner6} alt='' />
          <img src={partner7} alt='' />
          <img src={partner8} alt='' />
        
        </Slider>
      </div>
      
      <div className='LinksBlock'>
        <Link onClick={() => window.scrollTo(0, 0)} ref={myRef1}
              className={`linkFyTech ${visible1 ? 'scrollAnimation' : ''}`} to='/'>
          <img className='logoImg' src={fuTech} alt='' />
        </Link>
        
        <p ref={myRef2} className={`prg ${visible2 ? 'scrollAnimation' : ''}`}>How about we do a</p>
        <p ref={myRef3} className={`prg ${visible3 ? 'scrollAnimation' : ''}`}>thing or two</p>
        <div ref={myRef4} className="prg prg3">
          <p className={`${visible4 ? 'scrollAnimation' : ''}`}>together?</p>
          <Link to='/contact' className='talkWithUs contactUsBtn'>
            <div className='textBlock'>
              <div className='textLine G-alignItems-center'>
                {talkWithUs.map((el) => {
                  if (el !== ' ') {
                    return (<div className='letter'>{el}</div>)
                  } else {
                    return (<div className='space'></div>)
                  }
                })}
              </div>
              <div className='textLine G-alignItems-center'>
                {talkWithUs.map((el) => {
                  if (el !== ' ') {
                    return (<div className='letter'>{el}</div>)
                  } else {
                    return (<div className='space'></div>)
                  }
                })}
              </div>
            </div>
          </Link>

        </div>
      
      </div>
      
      
      <div className='LinksBlock2'>
        <Link onClick={() => window.scrollTo(0, 0)} ref={myRef3} to='/contact'
              className={`contactUsBtn G-alignItems-center ${visible3 ? 'scrollAnimation2' : ''}`}>
          <div className='textBlock'>
            <div className='textLine G-alignItems-center'>
              {ContactUs.map((el) => {
                if (el !== ' ') {
                  return (<div className='letter'>{el}</div>)
                } else {
                  return (<div className='space'></div>)
                }
              })}
            </div>
            <div className='textLine G-alignItems-center'>
              {ContactUs.map((el) => {
                if (el !== ' ') {
                  return (<div className='letter'>{el}</div>)
                } else {
                  return (<div className='space'></div>)
                }
              })}
            </div>
          </div>
          
          <div className='middleLine'></div>
          
          <div className='arrowBlock'>
            <img src={Arrow} alt='' />
            <img src={Arrow} alt='' />
          </div>
        
        </Link>
        
        <div className='linksBlock'>
          <div className='linksLine'>
            <Link onClick={() => window.scrollTo(0, 0)} ref={myRef4} to='/aboutUs'
                  className={`Link G-alignItems-center ${visible4 ? 'scrollAnimation2' : ''}`}>
              <div className='textBlock'>
                <div className='textLine G-alignItems-center'>
                  {AboutUs.map((el) => {
                    if (el !== ' ') {
                      return (<div className='letter'>{el}</div>)
                    } else {
                      return (<div className='space'></div>)
                    }
                  })}
                </div>
                <div className='textLine G-alignItems-center'>
                  {AboutUs.map((el) => {
                    if (el !== ' ') {
                      return (<div className='letter'>{el}</div>)
                    } else {
                      return (<div className='space'></div>)
                    }
                  })}
                </div>
              </div>
            </Link>
            <Link onClick={() => window.scrollTo(0, 0)} ref={myRef9} to='/service'
                  className={`Link G-alignItems-center ${visible9 ? 'scrollAnimation2' : ''}`}>
              <div className='textBlock'>
                <div className='textLine G-alignItems-center'>
                  {Services.map((el) => {
                    if (el !== ' ') {
                      return (<div className='letter'>{el}</div>)
                    } else {
                      return (<div className='space'></div>)
                    }
                  })}
                </div>
                <div className='textLine G-alignItems-center'>
                  {Services.map((el) => {
                    if (el !== ' ') {
                      return (<div className='letter'>{el}</div>)
                    } else {
                      return (<div className='space'></div>)
                    }
                  })}
                </div>
              </div>
            </Link>
            <Link onClick={() => window.scrollTo(0, 0)} ref={myRef6} to='/projects'
                  className={`Link G-alignItems-center ${visible6 ? 'scrollAnimation2' : ''}`}>
              <div className='textBlock'>
                <div className='textLine G-alignItems-center'>
                  {Projects.map((el) => {
                    if (el !== ' ') {
                      return (<div className='letter'>{el}</div>)
                    } else {
                      return (<div className='space'></div>)
                    }
                  })}
                </div>
                <div className='textLine G-alignItems-center'>
                  {Projects.map((el) => {
                    if (el !== ' ') {
                      return (<div className='letter'>{el}</div>)
                    } else {
                      return (<div className='space'></div>)
                    }
                  })}
                </div>
              </div>
            </Link>
          
          </div>
          <div className='linksLine'>
            <a ref={myRef4} target={'_blank'} href='https://www.instagram.com/fytechnology/'
               className={`Link G-alignItems-center ${visible4 ? 'scrollAnimation2' : ''}`}>
              <div className='textBlock'>
                <div className='textLine G-alignItems-center'>
                  {Instagram.map((el) => {
                    if (el !== ' ') {
                      return (<div className='letter'>{el}</div>)
                    } else {
                      return (<div className='space'></div>)
                    }
                  })}
                </div>
                <div className='textLine G-alignItems-center'>
                  {Instagram.map((el) => {
                    if (el !== ' ') {
                      return (<div className='letter'>{el}</div>)
                    } else {
                      return (<div className='space'></div>)
                    }
                  })}
                </div>
              </div>
            </a>
            <a ref={myRef9} href='/twitter' className={`Link G-alignItems-center ${visible9 ? 'scrollAnimation2' : ''}`}>
              <div className='textBlock'>
                <div className='textLine G-alignItems-center'>
                  {Twitter.map((el) => {
                    if (el !== ' ') {
                      return (<div className='letter'>{el}</div>)
                    } else {
                      return (<div className='space'></div>)
                    }
                  })}
                </div>
                <div className='textLine G-alignItems-center'>
                  {Twitter.map((el) => {
                    if (el !== ' ') {
                      return (<div className='letter'>{el}</div>)
                    } else {
                      return (<div className='space'></div>)
                    }
                  })}
                </div>
              </div>
            </a>
            <a ref={myRef6} href='/behance'
               className={`Link G-alignItems-center ${visible6 ? 'scrollAnimation2' : ''}`}>
              <div className='textBlock'>
                <div className='textLine G-alignItems-center'>
                  {Behance.map((el) => {
                    if (el !== ' ') {
                      return (<div className='letter'>{el}</div>)
                    } else {
                      return (<div className='space'></div>)
                    }
                  })}
                </div>
                <div className='textLine G-alignItems-center'>
                  {Behance.map((el) => {
                    if (el !== ' ') {
                      return (<div className='letter'>{el}</div>)
                    } else {
                      return (<div className='space'></div>)
                    }
                  })}
                </div>
              </div>
            </a>
            <a ref={myRef7} href='/linkedin'
               className={`Link G-alignItems-center ${visible7 ? 'scrollAnimation2' : ''}`}>
              <div className='textBlock'>
                <div className='textLine G-alignItems-center'>
                  {Linkedin.map((el) => {
                    if (el !== ' ') {
                      return (<div className='letter'>{el}</div>)
                    } else {
                      return (<div className='space'></div>)
                    }
                  })}
                </div>
                <div className='textLine G-alignItems-center'>
                  {Linkedin.map((el) => {
                    if (el !== ' ') {
                      return (<div className='letter'>{el}</div>)
                    } else {
                      return (<div className='space'></div>)
                    }
                  })}
                </div>
              </div>
            </a>
          
          </div>
        </div>
        
       <div className="globalLinks">
         <Link onClick={() => window.scrollTo(0, 0)} ref={myRef8} to='/fyTrading'
               className={`Link G-alignItems-center ${visible8 ? 'scrollAnimation2' : ''}`}>
           <div className='textBlock'>
             <div className='textLine G-alignItems-center'>
               {FyTrading.map((el) => {
                 if (el !== ' ') {
                   return (<div className='letter'>{el}</div>)
                 } else {
                   return (<div className='space'></div>)
                 }
               })}
             </div>
             <div className='textLine G-alignItems-center'>
               {FyTrading.map((el) => {
                 if (el !== ' ') {
                   return (<div className='letter'>{el}</div>)
                 } else {
                   return (<div className='space'></div>)
                 }
               })}
             </div>
           </div>
           <img className='imgArrowTop' src={arrowRightTop} alt='' />
         </Link>
  
         <Link style={{ marginBottom: `50px` }} onClick={() => window.scrollTo(0, 0)} ref={myRef8} to='/sassSolution'
               className={`Link G-alignItems-center ${visible8 ? 'scrollAnimation2' : ''}`}>
           <div className='textBlock'>
             <div className='textLine G-alignItems-center'>
               {SaasSolution.map((el) => {
                 if (el !== ' ') {
                   return (<div className='letter'>{el}</div>)
                 } else {
                   return (<div className='space'></div>)
                 }
               })}
             </div>
             <div className='textLine G-alignItems-center'>
               {SaasSolution.map((el) => {
                 if (el !== ' ') {
                   return (<div className='letter'>{el}</div>)
                 } else {
                   return (<div className='space'></div>)
                 }
               })}
             </div>
           </div>
           <img className='imgArrowTop' src={arrowRightTop} alt='' />
         </Link>

       </div>
      
      </div>
      
      <div className='policyCont'>
        <p className='copyright'>Copyright © 2021 Fytechnology LTD . All Rights Reserved.</p>
        
        <div className='linksToPolicy'>
          <Link className='LinkToPrivacy' onClick={() => window.scrollTo(0, 0)} to='/privacy&terms'>Privacy
            Policy</Link>
        
        </div>
      </div>
    
    </div>
  )
}

export default Footer