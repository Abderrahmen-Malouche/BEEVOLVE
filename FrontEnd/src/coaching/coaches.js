
import CoachPreview from "./coachpreview";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';

export default function Coaches(){
   
    const [coaches, setCoaches] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/coaches')
            .then(response => response.json())
            .then(data => setCoaches(data))
            .catch(error => console.error('Error fetching coaches:', error));
            
    }, []);
    return(
        <div className="coaches">
        <div className="special-heading">Check Our Top Rated Coaches </div>
        <div className="container">
        {coaches.slice(0, 3).map(coach => (
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
       <button  className="viewmore" onClick="window.open"><Link to="/coaches">VIEW ALL COACHES</Link></button>
       </div>
    )
}