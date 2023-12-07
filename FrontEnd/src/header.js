import React from "react";
import longLogo from "./images/BEEVOLVE VERSION.png"
import "./style.css"
import { Link } from "react-router-dom";
export default function Header(){
    return(
        <header>
        <div className="container">
            <a href="/" className="logo"><img src={longLogo} alt="logo"/></a>
                <ul class="nav">
                    <li><Link to="/videos">Videos</Link></li>
                    <li><Link to="/signup">Sign Up</Link></li>
                    <li><Link to="/login">Sign In</Link></li>
                </ul>
        </div>
        </header>
    )
}