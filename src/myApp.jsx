import React, { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.scss'
import './source/styles/Global.scss'
import Home from './pages/Home/home.jsx'
import Navigation from './pages/navigation/navigation'
import Footer from './pages/footer/footer'
import AboutUs from './pages/aboutUs/aboutUs'
import Projects from './pages/Work/Projects'
import WorkBlock from './pages/WorkBlock/WorkBlock'
import ContactUs from './pages/ContactUs/ContactUs'
import Lenis from '@studio-freight/lenis'
import Services from './pages/services/services'
import LoadingComponent from './pages/loadingComponent/loadingComponent'
import WorkMain from './pages/workMain/workMain'
import ErrorPage from './pages/error404/errorPage'
import PrivacyPolicy from './pages/privacyPolicy/privacyPolicy'
import Cursor from './source/cursor/cursor'


function MyApp() {
  const [appSettings, setAppSettings] = useState({
    height  : 'auto',
    overflow: 'visible'
  })
  // const [scrollHide, setScrollHide] = useState(0)
  
  let lenis = new Lenis({
    duration: 2.5,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
  })
  function raf(time) {
        lenis.raf(time)
    console.log(window.scrollY)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)
  
  
  const location = useLocation()
  const [showNavigation, setShowNavigation] = useState()
  
  
  useEffect(() => {
    switch (location.pathname) {
      case '/' :
        setShowNavigation(true)
        break
      case '/home' :
        setShowNavigation(true)
        break
      case '/aboutUs' :
        setShowNavigation(true)
        break
      case '/projects' :
        setShowNavigation(true)
        break
      case '/carfy' :
        setShowNavigation(true)
        break
      case '/contact' :
        setShowNavigation(true)
        break
      case '/service' :
        setShowNavigation(true)
        break
      case '/work' :
        setShowNavigation(true)
        break
      case '/privacy&terms' :
        setShowNavigation(true)
        break
      case '*' :
        setShowNavigation(false)
        break
      
    }
    
  }, [])
  
  
  return (
    
    <div style={{ height: appSettings.height, overflow: appSettings.overflow }} className='App'>
      
      {showNavigation && <LoadingComponent />}
      
      
      <div style={{ position: 'relative', zIndex: 1000 }}  className='MainRoutes'>
        {showNavigation && <Navigation />}
        <Routes>
          
          <Route path='/' element={<Home />} /> // Home
          <Route path='/home' element={<Home />} /> // Home
          <Route path='/aboutUs' element={<AboutUs />} /> // About Us
          <Route path='/projects' element={<Projects />} />/ Projects
          <Route path='/carfy' element={<WorkBlock />} /> // project Carfy
          <Route path='/contact' element={<ContactUs />} /> // Contact Us
          <Route path='/service' element={<Services />} />
          <Route path='/work' element={<WorkMain />} /> // work Main
          <Route path='/privacy&terms' element={<PrivacyPolicy />} />
          <Route path='*' element={<ErrorPage />} />
        
        </Routes>
        
        {showNavigation && <Footer />}
      </div>
      
      <Cursor/>
    
    </div>
  
  )
}

export default MyApp
