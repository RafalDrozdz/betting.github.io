import React from "react";
import MatchAdd from "./MatchAdd";
import Coupon from "./Coupon"

const Coupons = (props) => {
   const results = [...props.results].map(item => {
      return(
         <div className="result" key={item.id}>
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
         <Coupon coupon={coupon} odds={item.odds} moneyToPay={item.moneyToPay} moneyToWin={item.moneyToWin}/>
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
