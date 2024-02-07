import React, {useEffect, useState} from "react";
import "./cursor.scss"
import { useCartContext } from '../../CartContext'

function Cursor (){
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursor, setCursor] = useState(true)
  const [cursorText, setCursorText] = useState("")
  
  
  const {futurePointer, setFuturePointer, cursorFuture, setCursorFuture} = useCartContext()
  
 
    useEffect(()=>{
      if (window.innerWidth <= 992){
        setCursor(false)
      }
    }, [])
    
    
    
  
  useEffect(()=>{
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    
      if (cursorFuture){
        if (futurePointer === "left"){
          setCursorText("Slide left")
        } else if (futurePointer === "right"){
          setCursorText("Slide right")
        } else {
          setCursorText("")
        }
      } else {
        setCursorText("")
      }
    
    
    };
    window.addEventListener('mousemove', updatePosition);
  
    return()=>{
      window.addEventListener('mousemove', updatePosition);
  
    }
  })
  
  
    
  
  
  return (
     <div className={`circle-cursor ${cursorFuture ? "futureScroll" : ""}`} style={{ left: `${position.x}px`, top: `${position.y}px`, display: `${cursor ? "flex" : "none"}` }}>
        <p>
          {cursorText}
        </p>
     </div>
  );
}

export default Cursor