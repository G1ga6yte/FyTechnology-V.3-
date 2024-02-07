import React, { useEffect, useState } from 'react'
import './featuredWork.scss'
import { useInView } from 'react-intersection-observer'
import SlideComponent from './slideComponent/slideComponent'
import { useCartContext } from '../../../CartContext'
import Slider from 'react-slick'

import img1 from './images/img1_.png'
import img2 from './images/img2_.png'
import img3 from './images/img3_.png'
import img4 from './images/img4_.png'
import img5 from './images/img5_.png'
import img6 from './images/img6_.png'
import img7 from './images/img7_.png'
import img8 from './images/img8_.png'


function FeaturedWork() {
  const { ref: myRef1, inView: visible1 } = useInView()
  const { ref: myRef2, inView: visible2 } = useInView()
  
  const { cursorFuture, setCursorFuture } = useCartContext()
  
  const [slides, setSlides] = useState(2)
  useEffect(()=>{
    if (window.innerWidth <= 440){
      setSlides(1)
    }
  }, [])
  const settings = {
    dots          : false,
    infinite      : true,
    speed         : 1000,
    slidesToShow  : slides,
    slidesToScroll: 1,
    autoplay      : true,
    easing        : 'linear',
    autoplaySpeed : 5000
  }
  
  return (
    <div className='FeaturedWork'>
      <div className='headerBlock'>
        <div className='headerCont'>
          <p ref={myRef1} className={`FutureWork ${visible1 ? 'scrollAnimation' : ''}`}>Future Work</p>
        </div>
        <div className='underHeader'>
          <p ref={myRef2} className={`prg ${visible2 ? 'scrollAnimation2' : ''}`}>Check all our Project</p>
          <div className='underLine'></div>
        </div>
      </div>
      
      <div onMouseMove={() => setCursorFuture(true)} onMouseLeave={() => setCursorFuture(false)} className='slider'>
        <SlideComponent />
      </div>
      
      <div className='SliderBlock'>
        <Slider {...settings}>
          <img src={img1} className='img1' alt='' />
          <img src={img2} className='img1' alt='' />
          <img src={img3} className='img1' alt='' />
          <img src={img4} className='img1' alt='' />
          <img src={img5} className='img1' alt='' />
          <img src={img6} className='img1' alt='' />
          <img src={img7} className='img1' alt='' />
          <img src={img8} className='img1' alt='' />
        </Slider>
      </div>
    
    
    </div>
  )
}

export default FeaturedWork