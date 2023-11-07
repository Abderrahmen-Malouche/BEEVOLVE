import React from "react";

export default function Coach(props){
    return(
        <div className="coach">
            <div className="image">
                <img src={props.image}/>
                <h6 className="game--name">{props.game}</h6>
            </div>
            <div className="information">
                <div className="identification">
                <h4>{props.name}</h4>
                <img src={props.country}/>
                </div>
                <div className="achievement">
                 <div className="rating">
                    <i className="filled fas fa-star"></i>
                    <i className="filled fas fa-star"></i>
                    <i className="filled fas fa-star"></i>
                    <i className="filled fas fa-star"></i>
                     <i className="far fa-star"></i>
                    </div>
                    <img src={props.rank}/>
                </div>
                <div className="description">
                    <h4>{props.strong1}</h4>
                    <h4>{props.strong2}</h4>
                    <h4>{props.strong3}</h4>
                </div>
                <div className="lower">
                    <button>View Profile</button>
                    <h5>${props.price}/HR</h5>
                </div>
            </div>

        </div>
    )
}