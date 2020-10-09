import React from "react";

function Match({ match, handleClick }) {
   return (
      <div className="match" id={match.id}>
         <span className="teams-names">{`${match.hosts} - ${match.visitors}`}</span>
         <div>
            <span>1</span>
            <button
               onClick={() =>
                  handleClick(match.id, 1, match.active, match.hostsOdds)
               }
               className={match.active && match.tip === 1 ? "active" : null}
            >
               {match.hostsOdds.toFixed(2)}
            </button>
         </div>
         <div>
            <span>0</span>
            <button
               onClick={() =>
                  handleClick(match.id, 0, match.active, match.drawOdds)
               }
               className={match.active && match.tip === 0 ? "active" : null}
            >
               {match.drawOdds.toFixed(2)}
            </button>
         </div>
         <div>
            <span>2</span>
            <button
               onClick={() =>
                  handleClick(match.id, 2, match.active, match.visitorsOdds)
               }
               className={match.active && match.tip === 2 ? "active" : null}
            >
               {match.visitorsOdds.toFixed(2)}
            </button>
         </div>
      </div>
   );
}

export default Match;
