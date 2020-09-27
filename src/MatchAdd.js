import React from "react";

function MatchAdd({ item }) {
   function TypeOfType() {
      if (item.type === "hostsExchange") return 1;
      else if (item.type === "drawExchange") return 0;
      else if (item.type === "visitorsExchange") return 2;
   }

   return (
      <div>
         <span className="names-of-teams">{`${item.hosts} - ${item.visitors}`}</span>
         <span className="types">{`${TypeOfType()} - ${item.exchange.toFixed(
            2
         )}`}</span>
      </div>
   );
}
export default MatchAdd;
