import React, {useEffect, useState} from "react";
import {Route, Routes} from "react-router-dom";
import './App.scss';
import "./source/styles/Global.scss"
import Home from "./pages/Home/home.jsx";
import Navigation from "./pages/navigation/navigation";
import VideoPlay from "./source/videos/VideoPlayer";
import {useCartContext} from "./pages/Home/homeHead/CartContext";
import Footer from "./pages/footer/footer";
import AboutUs from "./pages/aboutUs/aboutUs";

function App() {
  const [appSettings, setAppSettings] = useState({
    height: "auto",
    overflow: "visible"
  })
  
  
  
  useEffect(()=>{
    if (window.innerWidth < 1024) {
      setAppSettings({
        height: "auto",
        overflow: "visible"
      })
    }
  }, [])
  
  
 
  
  function Pages (){
    return (
       <div style={{position:"relative", zIndex: 1000}} className="MainRoutes">
         <Navigation/>
         <Routes>
           <Route path="/" element={<Home/>} /> // Home
           <Route path="/home" element={<Home/>} /> // Home
           <Route path="/aboutUs" element={<AboutUs/>}/> // About Us
         </Routes>
         <Footer/>
       </div>
    )
  }
  
  
  return (
    <div style={{height : appSettings.height, overflow: appSettings.overflow}}  className="App">
      
      <VideoPlay/>
      
      <Pages/>
  
    </div>
  );
}

export default App;
