import React from "react";

function MatchAdd({ item }) {
   // function TypeOfTip() {
   //    if (item.tip === "hostsOdds") return 1;
   //    else if (item.tip === "drawOdds") return 0;
   //    else if (item.tip === "visitorsOdds") return 2;
   // }

   return (
      <div>
         <span className="names-of-teams">{`${item.hosts} - ${item.visitors}`}</span>
         <span className="types">{`${item.tip} - ${item.odds.toFixed(
            2
         )}`}</span>
         {/* <span>{item.active ? `*` : `X`}</span> */}
      </div>
   );
}
export default MatchAdd;
