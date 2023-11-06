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
        <div class="testimonials" id="testionmials">
        <div class="special-heading">Testimonials</div>
        <div class="container">
          {reviews}
        </div>
        <button> See all Reviews </button>
       </div>
    )
}