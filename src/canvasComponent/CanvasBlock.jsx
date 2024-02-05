import React from 'react'
import { CanvasComponent } from './canvasComponent'


function CanvasBlock () {
  
  window.addEventListener('scroll', function (){
  
  })
  
  return(
     <div  className="CanvasBlock" style={{height: `100vh`, width: `100%`}}>
       <CanvasComponent/>
     </div>
  )
}


export default CanvasBlock