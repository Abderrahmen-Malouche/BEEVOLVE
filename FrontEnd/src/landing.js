import React from "react";
import Coaches from "./coaching/coaches";
import Offer from "./offer";
import Games from "./supported-games/games";
import Testimonials from "./testiomonials/testimonials";
import Introduction from "./introduction";
import ReviewSubmission from "./testiomonials/review-submission";

export default function Landing(){
    return(
        <div>
        <Introduction/>
         <Offer/>
         <Games/>
         <Testimonials/>
         <Coaches/>
         <ReviewSubmission/>
        </div>
    )
}