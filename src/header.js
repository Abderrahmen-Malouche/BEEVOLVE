import React from "react";
import longLogo from "./images/BEEVOLVE VERSION.png"
import "./style.css"
export default function Header(){
    return(
        <header>
        <div className="container">
            <a href="#" className="logo"><img src={longLogo} alt="logo"/></a>
                <ul class="nav">
                    <li><a href="#article">Sign Up</a></li>
                    <li><a href="#gallery">Sign In</a></li>
                </ul>
        </div>
        </header>
    )
}