import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
function MatchAdd({ item, display, checkFlag }) {
 
   return (
      <div>
         <span className="names-of-teams">{`${item.hosts} - ${item.visitors}`}</span>
         <span className="types">{`${item.tip} - ${item.odds.toFixed(
            2
         )}`}</span>
         <span style={display && checkFlag ? {display: "block"} : {display: "none"}}>{item.active ? <FontAwesomeIcon icon={faCheckCircle} style={{color: "green"}}/> : <FontAwesomeIcon icon={faTimesCircle} style={{color: "red"}}/>}</span>
      </div>
   );
}
export default MatchAdd;
