import React from "react";

function Coupon({coupon, odds, moneyToPay, moneyToWin}) {
 
   return (
        <div className="coupon">
            <div className="element">{coupon}</div>
            <div className="summary">
                <div>
                    <span>Overall odds: </span>
                    <span>
                        <strong>{odds.toFixed(2)}</strong>
                    </span>
                </div>
                <div>
                    <span>Stake: </span>
                    <span>
                        <strong>{moneyToPay}$</strong>
                    </span>
                </div>
                <div>
                    <span>Possible win: </span>
                    <span>
                        <strong>{moneyToWin.toFixed(2)}$</strong>
                    </span>
                </div>
            </div>
    </div>
   );
}
export default Coupon;
