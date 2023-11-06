import React from "react";
export default function Review(props){
    return(
        <div class="box">
            <img src={props.image} alt=""/>
            <h3>{props.name}</h3>
            <span>Played {props.game}</span>
            <i class="filled fas fa-star"></i>
            <i class="filled fas fa-star"></i>
            <i class="filled fas fa-star"></i>
            <i class="filled fas fa-star"></i>
            <i class="far fa-star"></i>
            <p>{props.opinion}</p>
          </div>
    )
}
