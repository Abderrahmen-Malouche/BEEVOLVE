

import Review from "./review";
import React, { useRef, useEffect } from "react";
import { useState } from 'react';
export default function Testimonials(){
    const [reviews, setGames] = useState([]);

    useEffect(() => {
        // Fetch the list of games from the database
        fetch('http://localhost:5000/reviews') // Adjust the URL to your API endpoint
            .then(response => response.json())
            .then(data => setGames(data))
            .catch(error => console.error('Error fetching reviews:', error));
            console.log(reviews)
    }, []); // Empty dependency array to run only once on component mount
    const scrollImagesRef = useRef(null);

    const checkScroll = () => {
        const scrollImages = scrollImagesRef.current;
        const leftButton = document.querySelector(".left");
        const rightButton = document.querySelector(".right");
        const scrollLength = scrollImages.scrollWidth - scrollImages.clientWidth;
        const currentScroll = scrollImages.scrollLeft;

        if (currentScroll === 0) {
            leftButton.setAttribute("disabled", "true");
            rightButton.removeAttribute("disabled");
        } else if (currentScroll === scrollLength) {
            rightButton.setAttribute("disabled", "true");
            leftButton.removeAttribute("disabled");
        } else {
            leftButton.removeAttribute("disabled");
            rightButton.removeAttribute("disabled");
        }
    };

    const leftScroll = () => {
        scrollImagesRef.current.scrollBy({
            left: -1000,
            behavior: "smooth"
        });
    };

    const rightScroll = () => {
        scrollImagesRef.current.scrollBy({
            left: 1000,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        const scrollImages = scrollImagesRef.current;
        scrollImages.addEventListener("scroll", checkScroll);
        window.addEventListener("resize", checkScroll);
        checkScroll();

        return () => {
            scrollImages.removeEventListener("scroll", checkScroll);
            window.removeEventListener("resize", checkScroll);
        };
    }, []);
    
    return(
        <div className="testimonials" id="testionmials">
        <div className="special-heading">Testimonials</div>
        <div className="container">
        <button id="scrolling" class="left" onClick={leftScroll}>
            <i className="fas fa-angle-double-left"></i>
        </button>
          <div className="scroll-images" ref={scrollImagesRef}>
          {reviews.map(review => (
                <Review 
                key={review.id}
                game={review.game}
                name={review.name}
                description={review.opinion}
                rating={review.rating}
            />
            ))}
          </div>
          <button id="scrolling" className="right" onClick={rightScroll}>
             <i class="fas fa-angle-double-right"></i>
            </button>
        </div>
        </div>
    )
}