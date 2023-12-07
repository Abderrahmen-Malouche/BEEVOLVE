
import Game from "./game";
import React, { useState, useEffect } from 'react';

export default function Games(){
    const [games, setGames] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/games') 
            .then(response => response.json())
            .then(data => setGames(data))
            .catch(error => console.error('Error fetching games:', error));
    }, []); 
    
    return(
        <div className="team">
        <div className="special-heading">Our Supported Games</div>
        <div className="container">
        {games.map(game => (
                <Game 
                key={game.id}
                backImage={game.image}
                name={game.name}
                numberOfCoaches={game.numberOfCoaches}
            />
            ))}
       </div>
       </div>
    )
}