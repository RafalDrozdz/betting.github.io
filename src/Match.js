import React from "react";

function Match({ match, handleClick }) {
   return (
      <div className="match" id={match.id}>
         <span className="teams-names">{`${match.hosts} - ${match.visitors}`}</span>
         <div>
            <span>1</span>
            <button
               onClick={() =>
                  handleClick(
                     match.id,
                     "hostsExchange",
                     match.active,
                     match.hostsExchange
                  )
               }
            >
               {match.hostsExchange.toFixed(2)}
            </button>
         </div>
         <div>
            <span>0</span>
            <button
               onClick={() =>
                  handleClick(
                     match.id,
                     "drawExchange",
                     match.active,
                     match.drawExchange
                  )
               }
            >
               {match.drawExchange.toFixed(2)}
            </button>
         </div>
         <div>
            <span>2</span>
            <button
               onClick={() =>
                  handleClick(
                     match.id,
                     "visitorsExchange",
                     match.active,
                     match.visitorsExchange
                  )
               }
            >
               {match.visitorsExchange.toFixed(2)}
            </button>
         </div>
      </div>
   );
}

export default Match;
