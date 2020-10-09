import React from "react";
import MatchAdd from "./MatchAdd";

const Coupons = (props) => {
   const coupons = [...props.coupons].map((item) => {
      const coupon = item.matchAdd.map((item) => {
         return <MatchAdd key={item.id} item={item} />;
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
            {props.coupons.length ? coupons : `You don't have coupons`}

            <button onClick={props.checkResult}>Check result</button>
         </div>
      </main>
   );
};
export default Coupons;
