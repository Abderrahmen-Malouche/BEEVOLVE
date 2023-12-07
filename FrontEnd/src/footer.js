import React from "react";  
import longLogo from "./images/BEEVOLVE VERSION.png"
import { Link } from "react-router-dom";

export default function Footer(){
    return(<footer>
        <div className="container">
          <div className="box">
            <img src={longLogo} alt="BEEVOLVE"/>
            <ul>
              <li><a href="facebook.com" className="facebook" target="_BLANK">
                <i className="fab fa-facebook-f"></i>
              </a></li>
              <li><a href="x.com" className="twitter" target="_BLANK">
                <i className="fab fa-twitter"></i>
              </a></li>
              <li><a href="youtube.com" className="youtube" target="_BLANK">
                <i className="fab fa-youtube"></i>
              </a></li>
            </ul>
            <p>BEEVOLVE is a website where gamers can login and have access to everything related to gaming from tutorials , funny clips , their best players and coaches performance . It is created to limit the gamers search on google or other search engine . So if you are a gamer , you just go in and you have access to everything . </p>
          </div>
          <div className="links">
            <ul>
              <li>
                <li><Link to="/videos">
                  Videos
                </Link></li>
                <li><Link to="/login">
                  Sign in 
                </Link></li>
                <li><Link to="/signup">
                  Sign up
                </Link></li>
                <li><Link to="/coaches">
                 Coaches
                </Link></li>
            
              </li>
            </ul>
          </div>
          <div className="third-box">
            <div className="line">
              <i className="fas fa-map-marker-alt fa-fw"></i>
              <span> Budapest, Hungary , BME Room IQBF42</span>
            </div>
            <div className="line">
              <i className="far fa-clock fa-fw"></i>
              <span> Buisenss Hours:from 15:00 to 16:00</span>
            </div>
            <div className="line">
              <i className="fas fa-phone-volume fa-fw"></i>
              <span> +621454104168</span>
              <span> +454641564848</span>
            </div>
          </div>
          <div className="box-gallery">
            <div className="image">
              <img src="images/gallery-01.png" alt=""/>
            </div>
            <div className="image">
              <img src="images/gallery-02.png" alt=""/>
            </div>
            <div className="image">
              <img src="images/gallery-03.jpg" alt=""/>
            </div>
            <div className="image">
              <img src="images/gallery-04.png" alt=""/>
            </div>
            <div className="image">
              <img src="images/gallery-05.jpg" alt=""/>
            </div>
            <div className="image">
              <img src="images/gallery-06.png" alt=""/>
            </div>
          </div>
        </div>
        <div className="lowerpart">
          Made with &lt;3 By Abderrahmen
        </div>
       </footer>
       )
}