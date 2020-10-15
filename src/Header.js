import React from "react";
import { Route, Link} from "react-router-dom";
function Header({ money }) {
 
   return (
    <header>
        <span>My money: {money.toFixed(2)}$</span>
            <Route exact path="/">
                <Link to="/coupons" className="change-site">My cupons</Link>
            </Route>
            <Route exact path="/coupons">
                <Link to="/" className="change-site">Back</Link>
            </Route>
    </header>
   );
}
export default Header;
