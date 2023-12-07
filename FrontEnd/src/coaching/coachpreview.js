import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
export default function CoachPreview(props) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
    if (i <= props.rating) {
      stars.push(<i className="filled fas fa-star"></i>);
    } else {
      stars.push(<i className="far fa-star"></i>);
    }
  }
  console.log(props.image);
    return (
        <div className="coach">

             <img src={props.image} alt={props.name} />

            <h2 className="coachname">{props.name}</h2>
            <h4></h4>
            <h4 className="nationality"><span>Nationality :</span>  {props.country} </h4>


            <div className="rating">
                {stars}
            </div>
            <h3 class="rank">{props.rank}</h3>

            <div className="description">
                <h3 className="Strong">- {props.strong1}</h3>
                <h3 className="Strong">- {props.strong2}</h3>
                <h3 className="Strong">- {props.strong3}</h3>
            </div>

        </div>

    )
}