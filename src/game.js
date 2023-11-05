import React from "react";
export default function Game(props){
    return(
        <div className="box">
            <div className="upper">
              <div className="image">
                <img src={props.backImage} alt=""/>
              </div>
              <div className="links">
              <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
              <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
              <a href="#"><i className="fa-brands fa-youtube"></i></a>
              </div>
            </div>
            <div className="lower">
              <h2>{props.name}</h2>
            </div>
        </div>
    )
}