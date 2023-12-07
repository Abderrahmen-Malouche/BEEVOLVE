import React from "react";
export default function Game(props){
  console.log(props.backImage)
    return(
        <div className="box">
            <div className="upper">
              <div className="image">
                <img src={`http://localhost:5000/${props.backImage}`} alt=""/>
              </div>
            </div>
            <div className="lower">
              <h2>{props.name}</h2>
              <h3>Number of Coaches Available : {props.numberOfCoaches}</h3>
            </div>
        </div>
    )
}