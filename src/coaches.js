import React from "react";
import coachesdata from "./coachesdata";
import Coach from "./coach"
export default function Coaches(){
    const coaches=coachesdata.map(coach =>{
        return(
                <Coach
                    name={coach.name}
                    image={coach.image}
                    game={coach.gamr}
                    country={coach.nationality}
                    rank={coach.rank}
                    strong1={coach.strong1}
                    strong2={coach.strong2}
                    strong3={coach.strong3}
                    price={coach.price}
                    />
                
        )
    })
    return(
        <div className="coaches">
        <div className="special-heading">Check Our best Coaches </div>
        <div className="container">
          {coaches}
       </div>
       <button className="viewmore"> VIEW ALL COACHES </button>
       </div>
    )
}