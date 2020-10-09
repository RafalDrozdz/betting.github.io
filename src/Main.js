import React from "react";
import MatchAdd from "./MatchAdd";
import Match from "./Match";

const Main = (props) => {
   let matches = [...props.matches];
   matches = matches.map((item) => (
      <Match key={item.id} match={item} handleClick={props.handleClick} />
   ));
   let matchesAdd = [...props.matchesAdd];
   matchesAdd.sort((a, b) => {
      return a.id - b.id;
   });
   matchesAdd = matchesAdd.map((item) => (
      <MatchAdd key={item.id} item={item} />
   ));
   return (
      <main>
         <div className="container">
            <div className="matches">{matches}</div>
            <div className="matchesAdd">
               <div className="box">
                  <div className="type-matches">{matchesAdd}</div>
                  <div className="result">
                     {matchesAdd.length > 0 ? (
                        <>
                           <div>
                              <span className="grow">Overall odds:</span>
                              <strong>{props.odds.toFixed(2)}</strong>
                           </div>
                           <div>
                              <span className="grow">Total stake ($):</span>
                              <input
                                 type="number"
                                 min="1"
                                 max={props.money >= 1 ? props.money : 1}
                                 value={props.moneyToPay}
                                 onChange={props.handleChange}
                              ></input>
                           </div>
                           <div>
                              <span className="grow">Possible winnings:</span>
                                 <span>{`${props.moneyToWin.toFixed(2)} $`}</span>
                           </div>
                           <div>
                              <button
                                 className="clear"
                                 onClick={props.clearMatchesAdd}
                              >
                                 Remove all
                              </button>
                              <span className="grow"></span>
                              <button onClick={props.addBet}>Bet</button>
                           </div>
                        </>
                     ) : (
                        <div className="empty">Coupon is empty</div>
                     )}
                  </div>
               </div>
            </div>
         </div>
      </main>
   );
};
export default Main;
