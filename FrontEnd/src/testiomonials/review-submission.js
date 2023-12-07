
import StarRating from "./starRating";
import joystick from "../images/joystick.webp";
import React, { useState, useEffect } from 'react';
export default function ReviewSubmission(props){
    const [dataForm, setDataForm] = React.useState({
        name: "", 
        game: "", 
        rating: 0, 
        description: "" 
    });

    const handleRating = (newRating) => {
        setDataForm(prevData => ({ ...prevData, rating: newRating }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDataForm(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name:dataForm.name,
                rating:dataForm.rating,
                opinion:dataForm.description,
                game:dataForm.game
            })
        })
        .then(response => {
            if (!response.ok) {
                return response.json().then(data => {
                    throw new Error('Server error');
                });
            }
            return response.json();})
            .then(data => {
                window.location.reload();
                window.alert("Review Submitted Succesfulyy")
            })
                .catch(error => {
                    console.error('Network error:', error);
                  });
    };

    return(
        <div className="discount">
            <div className="image">
                <div className="holder">
                    <h1>Submit Review</h1>
                    <p>Please don't forget to submit your review about our website...</p>
                    <img src={joystick} alt="Joystick"/>
                </div>
            </div>
            <div className="second-part">
                <form className="holder" onSubmit={handleSubmit}>
                    <h1>Submit Review</h1>
                    <input type="text" name="name" placeholder="Your Name" value={dataForm.name} onChange={handleChange}/>
                    <select name="game" value={dataForm.game} onChange={handleChange}>
                        <option value="">Select a Game</option>
                        <option value="Valorant">Valorant</option>
                        <option value="Apex Legends">Apex Legends</option>
                        <option value="Counter Strike">Counter Strike</option>
                        <option value="League of legends">League of legends</option>
                    </select>
                    <div>
                        <h2>Your Rating</h2>
                        <StarRating totalStars={5} onRating={handleRating} />
                    </div>
                    <textarea name="description" placeholder="Tell Us What you think about the website" value={dataForm.description} onChange={handleChange}></textarea>
                    <button  type="submit" class="loginButton">Send </button>
                </form>
            </div>
        </div>
    );
}
