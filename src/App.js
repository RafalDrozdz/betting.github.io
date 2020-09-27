import React from "react";
import "./App.css";
import Match from "./Match";
import MatchAdd from "./MatchAdd";

class App extends React.Component {
   state = {
      matches: [],
      matchesAdd: [],
      coupons: [],
      money: 100,
      moneyToPay: 1,
   };
   handleClick = (id, type, active, exchange) => {
      let matches = [...this.state.matches];
      let matchesAdd = [...this.state.matchesAdd];
      if (!active) {
         matchesAdd = matchesAdd.concat(
            matches
               .filter((item) => item.id === id && !item.active)
               .map(
                  (item) =>
                     (item = item = {
                        id: item.id,
                        hosts: item.hosts,
                        visitors: item.visitors,
                        exchange: item[type],
                        type,
                     })
               )
         );

         matches = matches
            .filter((item) => item.id !== id)
            .concat(
               matches
                  .filter((item) => item.id === id)
                  .map(
                     (item) =>
                        (item = {
                           id: item.id,
                           hosts: item.hosts,
                           visitors: item.visitors,
                           hostsExchange: item.hostsExchange,
                           drawExchange: item.drawExchange,
                           visitorsExchange: item.visitorsExchange,
                           active: true,
                           type,
                        })
                  )
            );
      } else if (active) {
         if (
            type ===
            matchesAdd[matchesAdd.findIndex((item) => item.id === id)].type
         ) {
            matchesAdd.splice(
               matchesAdd.findIndex((item) => item.id === id),
               1
            );
            matches = matches
               .filter((item) => item.id !== id)
               .concat(
                  matches
                     .filter((item) => item.id === id)
                     .map(
                        (item) =>
                           (item = {
                              id: item.id,
                              hosts: item.hosts,
                              visitors: item.visitors,
                              hostsExchange: item.hostsExchange,
                              drawExchange: item.drawExchange,
                              visitorsExchange: item.visitorsExchange,
                              active: false,
                              type,
                           })
                     )
               );
         } else {
            matches = matches
               .filter((item) => item.id !== id)
               .concat(
                  matches
                     .filter((item) => item.id === id)
                     .map(
                        (item) =>
                           (item = {
                              id: item.id,
                              hosts: item.hosts,
                              visitors: item.visitors,
                              hostsExchange: item.hostsExchange,
                              drawExchange: item.drawExchange,
                              visitorsExchange: item.visitorsExchange,
                              active: true,
                              type,
                           })
                     )
               );
            matchesAdd.splice(
               matchesAdd.findIndex((item) => item.id === id),
               1
            );
            matchesAdd = matchesAdd.concat(
               matches
                  .filter((item) => item.id === id)
                  .map(
                     (item) =>
                        (item = item = {
                           id: item.id,
                           hosts: item.hosts,
                           visitors: item.visitors,
                           exchange: item[type],
                           type,
                        })
                  )
            );
         }
      }
      matches.sort((a, b) => {
         return a.id - b.id;
      });
      this.setState({
         matchesAdd,
         matches,
      });
   };

   clearMatchesAdd = () => {
      const matches = [...this.state.matches];
      matches.map((item) => (item.active = false));
      this.setState({
         matchesAdd: [],
         matches,
         moneyToPay: 1,
      });
   };

   handleChange = (event) => {
      this.setState({
         moneyToPay: event.target.value,
      });
   };

   addBet = () => {
      const { money, moneyToPay } = this.state;
      if (money >= moneyToPay && moneyToPay >= 1) {
         const coupons = [...this.state.coupons];
         coupons.push({
            matchAdd: [...this.state.matchesAdd],
            moneyToPay,
         });
         this.setState({
            coupons,
            money: money - moneyToPay,
         });
         this.clearMatchesAdd();
      }
   };

   componentDidMount() {
      fetch("data/betting.json")
         .then((response) => response.json())
         .then((data) => {
            this.setState({
               matches: data.matches,
            });
         });
   }
   render() {
      let matches = [...this.state.matches];
      matches = matches.map((item) => (
         <Match key={item.id} match={item} handleClick={this.handleClick} />
      ));
      let matchesAdd = [...this.state.matchesAdd];
      let exchange = 1;

      for (const item of matchesAdd) {
         exchange *= item.exchange;
      }
      matchesAdd.sort((a, b) => {
         return a.id - b.id;
      });
      matchesAdd = matchesAdd.map((item) => (
         <MatchAdd key={item.id} item={item} />
      ));

      return (
         <>
            <header>
               <span>My money: {this.state.money.toFixed(2)}$</span>
               <button>My cupons</button>
            </header>
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
                                    <span className="grow">Exchange:</span>
                                    <strong>{exchange.toFixed(2)}</strong>
                                 </div>
                                 <div>
                                    <span className="grow">To pay ($):</span>
                                    <input
                                       type="number"
                                       min="1"
                                       max={
                                          this.state.money >= 1
                                             ? this.state.money
                                             : 1
                                       }
                                       value={this.state.moneyToPay}
                                       onChange={this.handleChange}
                                    ></input>
                                 </div>
                                 <div>
                                    <span className="grow">Possible win:</span>
                                    <span>
                                       {`${(
                                          exchange * this.state.moneyToPay
                                       ).toFixed(2)} $`}
                                    </span>
                                 </div>
                                 <div>
                                    <button
                                       className="clear"
                                       onClick={this.clearMatchesAdd}
                                    >
                                       Clear coupon
                                    </button>
                                    <span className="grow"></span>
                                    <button onClick={this.addBet}>Bet</button>
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
            <footer>Rafał Drożdż</footer>
         </>
      );
   }
}

export default App;
