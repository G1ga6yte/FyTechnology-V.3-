import React from "react";
import "./lastVideoScene.scss"

function LastVideoScene (){
  return(
     <div className="VideoSceneCont">
       <video  loop autoPlay muted className="videoLastScene">
         <source type="video/mp4" src={require('../../../source/videos/Comp.webm')} />
       </video>
     </div>
  )
}

export default LastVideoScene