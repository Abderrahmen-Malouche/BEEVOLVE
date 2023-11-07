import React from "react";
import gamedata from "./gamedata";
import Game from "./game";

export default function Games(){
    const games=gamedata.map(game =>{
        return(
                <Game
                    name={game.name}
                    backImage={game.backImage}
                    numberOfCoaches={game.numberOfCoaches}
                    />
                
        )
    })
    return(
        <div className="team">
        <div className="special-heading">Our Supported Games</div>
        <div className="container">
          {games}
       </div>
       <button className="viewmore"> SEE ALL THE GAMES </button>
       </div>
    )
}