import React from "react";
import MatchAdd from "./MatchAdd";

const Coupons = (props) => {
   const results = [...props.results].map(item => {
      return(
         <div className="result">
            <span className="names-of-teams">{`${item.hosts} - ${item.visitors}`}</span>
            <span className="types">{item.score}</span>
         </div>)
         }
      )
   const coupons = [...props.coupons].map((item) => {
      const coupon = item.matchAdd.map((item) => {
         return <MatchAdd key={item.id} item={item} display={true} checkFlag={props.checkFlag}/>;
      });
      return (
         <div className="coupon">
            <div className="element">{coupon}</div>
            <div className="summary">
               <div>
                  <span>Overall odds: </span>
                  <span>
                     <strong>{item.odds.toFixed(2)}</strong>
                  </span>
               </div>
               <div>
                  <span>Stake: </span>
                  <span>
                     <strong>{item.moneyToPay}$</strong>
                  </span>
               </div>
               <div>
                  <span>Possible win: </span>
                  <span>
                     <strong>{item.moneyToWin.toFixed(2)}$</strong>
                  </span>
               </div>
            </div>
         </div>
      );
   });

   return (
      <main className="coupons">
         <div className="container">
            {props.coupons.length ? coupons : <div className="no-coupons">You don't have coupons</div>}

            <button className="check-result" onClick={props.checkResult} style={props.checkFlag || !coupons.length ? {display: "none"} : {display: "block"}}>Check result</button>
         </div>
         <div className="container" style={props.checkFlag ? {display: "block"} : {display: "none"}}>
            {results}
         </div>
      </main>
      
   );
};
export default Coupons;
