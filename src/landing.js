import React from "react";
import simpleLogo from "./images/Logo.png"

export default function Landing(){
    return(
        <div className="landing">
        <div className="container">
          <img src={simpleLogo} alt="logo"/>  
          <div class="text">
                <h1>Level Up Your Game with Beevolve</h1>
                <p>Where Even Bees Would Bee Jealous of Your Skills</p>
            </div>
            
        </div>
        <a href="#article" className="go-down">
            <i className="fas fa-angle-double-down fa-2x"></i>
        </a>
    </div>
    )
}