import React from "react";
import ReactPlayer from "react-player";
export default function Video(props){
    return(
        <div className="box">
            <div className="upper">
              <div className="video">
              <ReactPlayer 
              url={props.link} 
              width="420px"
              controls
              className="react-player" ></ReactPlayer>
              </div>
            </div>
            <div className="lower">
              <h2>{props.title}</h2>
              <h2><span>Coach: </span> {props.coach}</h2>
              <h2><span>Game: </span>{props.game}</h2>
            </div>
        </div>
    )
}