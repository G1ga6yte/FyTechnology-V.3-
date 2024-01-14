import React from "react";

function Component (props){
  return(
     <div style={{transform: `translateY(${props.style.transform}px)`, left: `${props.style.left}%`}} className="ImgBlock">
       <img style={{transform: `scale(${props.style.scale})`}} className="ItemImg" src={props.el.images[0]} alt=""/>
     </div>
  )
}

export default Component