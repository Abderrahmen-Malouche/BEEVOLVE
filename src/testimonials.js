import React from "react";
import reviewdata from "./reviewdata";
import Review from "./review";

export default function Testimonials(){
    const reviews=reviewdata.map(review =>{
        return(
                <Review
                    name={review.name}
                    image={review.image}
                    rating={review.rating}
                    game={review.game}
                    opinion={review.description}
                    />
                
        )
    })
    return(
        <div className="testimonials" id="testionmials">
        <div className="special-heading">Testimonials</div>
        <div className="container">
          {reviews}
        </div>
        <button className="viewmore"> SEE ALL THE REVIEWS </button>
       </div>
    )
}