import React, {useEffect, useRef, useState} from "react";
import {Route, Routes} from "react-router-dom";
import "./App.scss";
import "./source/styles/Global.scss";
import Home from "./pages/Home/home.jsx";
import Navigation from "./pages/navigation/navigation";
import VideoPlay from "./source/videos/VideoPlayer";
import Footer from "./pages/footer/footer";
import AboutUs from "./pages/aboutUs/aboutUs";
import Projects from "./pages/Work/Projects";
import WorkBlock from "./pages/WorkBlock/WorkBlock";
import ContactUs from "./pages/ContactUs/ContactUs";
import Lenis from "@studio-freight/lenis";
import Services from "./pages/services/services";
import Cursor from "./source/cursor/cursor";
import LoadingComponent from "./pages/loadingComponent/loadingComponent";
import WorkMain from "./pages/workMain/workMain";
// import { View, Animated, Easing, StyleSheet, TouchableOpacity, Text } from "react-native"
// import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
// import {gsap} from "gsap";

function App() {
  const [appSettings, setAppSettings] = useState({
    height  : "auto",
    overflow: "visible",
  });
  
  
  const lenis = new Lenis()
  
  lenis.on('scroll', (e) => {
  })
  
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  
  requestAnimationFrame(raf)
  
  
  
  function Pages() {
    return (
       
         <div style={{position: "relative", zIndex: 1000}} className="MainRoutes">
             <Navigation/>
             <Routes>
               <Route path="/" element={<Home/>}/> // Home
               <Route path="/home" element={<Home/>}/> // Home
               <Route path="/aboutUs" element={<AboutUs/>}/> // About Us
               <Route path="/projects" element={<Projects/>}/>/ Projects
               <Route path="/carfy" element={<WorkBlock/>}/> // project Carfy
               <Route path="/contact" element={<ContactUs/>}/> // Contact Us
               <Route path="/service" element={<Services/>} />
               <Route path="/work" element={<WorkMain/>}/> // work Main
             </Routes>
             <Footer/>
         </div>
       
    );
  }
  
  
  return (
     
     <div style={{height: appSettings.height, overflow: appSettings.overflow}} className="App">
       
       <VideoPlay/>
       {/*<LoadingComponent/>*/}
       
       <Pages/>
       
       <Cursor/>
     
     </div>
     
  );
}

export default App;
