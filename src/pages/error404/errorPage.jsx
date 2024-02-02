import React from "react";
import {SvgsError} from "./svgs/svgsError";
import "./errorPage.scss"
import {Link} from "react-router-dom";

function ErrorPage (){
  return(
     <div className="ErrorPage">
       <img src={SvgsError.img8} className="img1" alt=""/>
       <img src={SvgsError.img27} className="img2" alt=""/>
       <img src={SvgsError.imgVector1} className="img3" alt=""/>
       <img src={SvgsError.imgSorry} className="img4" alt=""/>
       <img src={SvgsError.imgEosSettings} className="img5" alt=""/>
       <img src={SvgsError.imgVector} className="img6" alt=""/>
       <img src={SvgsError.img7} className="img7" alt=""/>
       <img src={SvgsError.img1} className="img8" alt=""/>
       <img src={SvgsError.imgGummy} className="img9" alt=""/>
  
  
  
  
  
       <div className="TextBlock">
            <p className="head">OOPS!!!</p>
          <p className="error">404 error</p>
          <p className="prg">The page you are looking for can not found.</p>
          <Link to="/" className="linkToHome">
            Back to  home
          </Link>
        </div>
     </div>
  )
}


export default ErrorPage