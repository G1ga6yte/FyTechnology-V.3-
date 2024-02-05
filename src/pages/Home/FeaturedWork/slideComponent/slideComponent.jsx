import React, { useState, useEffect} from 'react';
import './style.scss';
import { useCartContext } from '../../../../CartContext'

function SlideComponent() {
  const [ang, setAng] = useState(0);
  
  const handlePrevClick = () => {
    setAng(prevState => prevState + 22.5);
    console.log(ang)
  };
  
  const handleNextClick = () => {
    setAng(prevState => prevState - 22.5);
    console.log(ang)
  };
  
  const {futurePointer, setFuturePointer} = useCartContext()
  
  const [elem, setElem] = useState("")
  
  useEffect(()=>{
    function parallax(e) {
      let _w = window.innerWidth/2;
      let _h = window.innerHeight/2;
      let _mouseX = e.clientX;
      let _mouseY = e.clientY;
      let wPosition = `${(_mouseX-_w)/15}px`
      let hPosition = `${(_mouseY-_h)/15}px`
      let x = `translate(${wPosition}, ${hPosition})`;
      setElem(x)
    }
    document.addEventListener("mousemove", parallax);
  
    return () => {
      document.addEventListener("mousemove", parallax);
  
    }
  }, [])
  
  
  return (
    <div style={{transform: `${elem}`}} className="SlideComponent">
      
      <div className="cursorSpace">
        <div onClick={handlePrevClick} onMouseMove={()=>{setFuturePointer("left")}}  className="leftSide">
        
        </div>
        <div onClick={handleNextClick} onMouseMove={()=>{setFuturePointer("right")}}  className="rightSide">
        
        </div>
      </div>
      
      <div className="holder">
        <div className="spinner" style={{ '--ang': `${ang}deg` }}>
          {Array.from({ length: 16 }, (_, index) => (
            <div key={index} className={`panel panel-${index + 1}`}></div>
          ))}
          <div className="fade"></div>
        </div>
      </div>
    </div>
  );
}

export default SlideComponent;