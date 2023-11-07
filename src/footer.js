import React from "react";  
import longLogo from "./images/BEEVOLVE VERSION.png"
export default function Footer(){
    return(<footer>
        <div className="container">
          <div className="box">
            <img src={longLogo} alt="BEEVOLVE"/>
            <ul>
              <li><a href="#" className="facebook">
                <i className="fab fa-facebook-f"></i>
              </a></li>
              <li><a href="#" className="twitter">
                <i className="fab fa-twitter"></i>
              </a></li>
              <li><a href="#" className="youtube">
                <i className="fab fa-youtube"></i>
              </a></li>
            </ul>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus maxime, nemo recusandae quaerat aliquid at harum dolores eius id.</p>
          </div>
          <div className="links">
            <ul>
              <li>
                <li><a href="#">
                  Important Link 1
                </a></li>
                <li><a href="#">
                  Important Link 2
                </a></li>
                <li><a href="#" >
                Important Link 3
                </a></li>
                <li><a href="#">
                  Important Link 4
                </a></li>
                <li><a href="#">
                 Important Link 5
                </a></li>
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