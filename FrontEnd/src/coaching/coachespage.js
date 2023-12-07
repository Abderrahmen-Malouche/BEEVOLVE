
import React, { useState, useEffect } from 'react';
import CoachPreview from "./coachpreview";


export default function Coachespage() {
    
    const [coaches, setGames] = useState([]);

    useEffect(() => {
        
        fetch('http://localhost:5000/coaches')
            .then(response => response.json())
            .then(data => setGames(data))
            .catch(error => console.error('Error fetching coaches:', error));

    }, []);
    return (
        <div class="coaches">
            <div class="special-heading">Our best Coaches </div>
            <div class="container">
            {coaches.map(coach => (
                <CoachPreview
                key={coach.id}
                image={coach.image}
                country={coach.nationality}
                name={coach.name}
                rank={coach.rank}
                strong1={coach.strong1}
                strong2={coach.strong2}
                strong3={coach.strong3}
                rating={coach.rating}
            />
            ))}

            </div>
        </div>
    )
}