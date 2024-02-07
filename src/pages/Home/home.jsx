import React from 'react'
import './home.scss'
import HomeHead from './homeHead/homeHead'
import WhatWeDo from './homeWhatWeDo/whatWeDo'
import FeaturedWork from './FeaturedWork/featuredWork'
import WhatPayingFor from './whatPayingFor/whatPayingFor'
import PartnerSlide from './partnerSlide/partnerSlide'
import { useInView } from 'react-intersection-observer'
import { useCartContext } from '../../CartContext'

function Home() {
  
  const {ref: myRef1, inView: visible1} = useInView();
  const {ref: myRef2, inView: visible2} = useInView();
  const {ref: myRef3, inView: visible3} = useInView();
  const {ref: myRef4, inView: visible4} = useInView();
  
  const {visible5} = useCartContext();
  
  return (
    <div className='Home'>
      
      <div className={`index1 section ${visible1 ? "section1" : ""}`}>
        <HomeHead />
      </div>
      <div ref={myRef1}  className={`index2 section `}>
        <WhatWeDo />
      </div>
      <div ref={myRef2} className={`index3 section `}>
        <FeaturedWork />
      </div>
      <div ref={myRef3} className={`index4 section  ${visible4 ? "section4" : ""}`}>
        <WhatPayingFor />
      </div>
      <div ref={myRef4} className={`index5 section  ${visible5 ? "section5" : ""}`}>
        <PartnerSlide />
      </div>
    
    </div>
  )
}

export default Home