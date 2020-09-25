import React from "react";

function Match({ match, handleClick }) {
   return (
      <div className="match" id={match.id}>
         <span className="teams-names">{`${match.hosts} - ${match.visitors}`}</span>
         <div>
            <span>1</span>
            <button onCLick={handleClick}>
               {match.hostsExchange.toFixed(2)}
            </button>
         </div>
         <div>
            <span>0</span>
            <button onCLick={handleClick}>
               {match.drawExchange.toFixed(2)}
            </button>
         </div>
         <div>
            <span>2</span>
            <button onCLick={handleClicl}>
               {match.visitorsExchange.toFixed(2)}
            </button>
         </div>
      </div>
   );
}

export default Match;
