import React from "react";
export default function Review(props){
    const filledStars = Array(props.rating).fill(<i class="filled fas fa-star"></i>);
    const emptyStars = Array(5 - props.rating).fill(<i class="far fa-star"></i>);
    return(
        <div class="box">
            <h3>{props.name}</h3>
            <span>Played {props.game}</span>
            {filledStars}
            {emptyStars}
            <p>{props.description}</p>
          </div>
    )
}
