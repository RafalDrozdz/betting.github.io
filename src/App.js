import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Main from "./Main";
import Coupons from "./Coupons";
import Header from "./Header"


class App extends React.Component {
   state = {
      matches: [],
      matchesAdd: [],
      coupons: [],
      results: [],
      money: 100,
      moneyToPay: 1,
      checkFlag: false,
   };

   handleClick = (id, tip, active, odds) => {
      let matches = [...this.state.matches];
      let matchesAdd = [...this.state.matchesAdd];
      if (!active) {
         matchesAdd = matchesAdd.concat(
            matches
               .filter((item) => item.id === id && !item.active)
               .map(
                  (item) =>
                     (item = {
                        id: item.id,
                        hosts: item.hosts,
                        visitors: item.visitors,
                        odds,
                        tip,
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
                           hostsOdds: item.hostsOdds,
                           drawOdds: item.drawOdds,
                           visitorsOdds: item.visitorsOdds,
                           active: true,
                           tip,
                        })
                  )
            );
      } else if (active) {
         if (
            tip ===
            matchesAdd[matchesAdd.findIndex((item) => item.id === id)].tip
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
                              hostsOdds: item.hostsOdds,
                              drawOdds: item.drawOdds,
                              visitorsOdds: item.visitorsOdds,
                              active: false,
                              tip,
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
                              hostsOdds: item.hostsOdds,
                              drawOdds: item.drawOdds,
                              visitorsOdds: item.visitorsOdds,
                              active: true,
                              tip,
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
                        (item = {
                           id: item.id,
                           hosts: item.hosts,
                           visitors: item.visitors,
                           odds,
                           tip,
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
      if(!this.state.checkFlag){
         let odds = 1;
         for (const item of [...this.state.matchesAdd]) {
            odds *= item.odds;
         }

         const { money, moneyToPay } = this.state;
         if (money >= moneyToPay && moneyToPay >= 1) {
            const coupons = [...this.state.coupons];
            coupons.push({
               matchAdd: [...this.state.matchesAdd],
               moneyToPay,
               odds,
               moneyToWin: this.state.moneyToPay * odds * 0.88,
            });
            this.setState({
               coupons,
               money: money - moneyToPay,
            });
            this.clearMatchesAdd();
         }
   }
   else{
      alert("You check results")
   }
   };

   checkResult = () => {
         let coupons = [...this.state.coupons];
         for (let i = 0; i < coupons.length; i++) {
            const stateResults = [...this.state.results];
            let results = [];
            
      
         for (let a = 0; a < stateResults.length; a++) {
            
            results = results.concat(
               stateResults[stateResults.findIndex(item => item.id===coupons[i].matchAdd[a < coupons[i].matchAdd.length? a: coupons[i].matchAdd.length -1].id)]
            )
            
            
            if (
               coupons[i].matchAdd[a < coupons[i].matchAdd.length? a: coupons[i].matchAdd.length -1].tip === results[a < coupons[i].matchAdd.length? a: coupons[i].matchAdd.length -1].result
            ) {
               coupons[i].matchAdd[a < coupons[i].matchAdd.length? a: coupons[i].matchAdd.length -1].active = true;
            } else{
               coupons[i].matchAdd[a < coupons[i].matchAdd.length? a: coupons[i].matchAdd.length -1].active = false;
            }
         }
         this.setState({
            coupons,
            checkFlag: true,
         }); 
      }
   
      
   };

   generateScoors = () => {
      const win = [
         "1:0",
         "2:0",
         "3:0",
         "4:0",
         "5:0",
         "2:1",
         "3:1",
         "3:2",
         "4:1",
         "4:2",
         "4:3",
         "5:1",
         "5:2",
         "5:3",
         "5:4",
      ];
      const draw = ["0:0", "1:1", "2:2", "3:3", "4:4", "5:5"];
      const loss = [
         "0:1",
         "0:2",
         "0:3",
         "0:4",
         "0:5",
         "1:2",
         "1:3",
         "2:3",
         "1:4",
         "2:4",
         "3:4",
         "1:5",
         "2:5",
         "3:5",
         "4:5",
      ];
      let matches = [...this.state.matches];
      const results = matches.map((item) => {
         const hostsChance = Math.floor(
            (item.visitorsOdds /
               (item.hostsOdds + item.drawOdds + item.visitorsOdds)) *
               100
         );
         const drawChance = Math.floor(
            (item.drawOdds /
               (item.hostsOdds + item.drawOdds + item.visitorsOdds)) *
               100
         );
         const visitorsChance = Math.floor(
            (item.hostsOdds /
               (item.hostsOdds + item.drawOdds + item.visitorsOdds)) *
               100
         );

         const random = Math.floor(
            Math.random() * (hostsChance + drawChance + visitorsChance)
         );
         let result = null;
         if (random <= hostsChance) {
            result = {
               score: win[Math.floor(Math.random() * win.length)],
               result: 1,
               id: item.id,
               hosts: item.hosts,
               visitors: item.visitors,
            };
         } else if (random <= hostsChance + drawChance) {
            result = {
               score: draw[Math.floor(Math.random() * draw.length)],
               result: 0,
               id: item.id,
               hosts: item.hosts,
               visitors: item.visitors,
            };
         } else if (random <= hostsChance + drawChance + visitorsChance) {
            result = {
               score: loss[Math.floor(Math.random() * loss.length)],
               result: 2,
               id: item.id,
               hosts: item.hosts,
               visitors: item.visitors,
            };
         }
         return result;
      });
      if (this.state.results.length < 1) {
         this.setState({
            results,
         });
      }
   };

   componentDidMount() {
      fetch("data/betting.json")
         .then((response) => response.json())
         .then((data) => {
            this.setState({
               matches: data.matches,
            });

            this.generateScoors();
         });
   }
   render() {
      const { matches, matchesAdd, coupons, money, moneyToPay, checkFlag, results} = this.state;
      let odds = 1;
      for (const item of [...this.state.matchesAdd]) {
         odds *= item.odds;
      }
      const moneyToWin = this.state.moneyToPay * odds * 0.88;
      return (
         <>
            <Router>
               <Header money={this.state.money}/>
               <Switch>
                  <Route
                     exact
                     path="/"
                     render={() => (
                        <Main
                           matches={matches}
                           matchesAdd={matchesAdd}
                           coupons={coupons}
                           money={money}
                           moneyToPay={moneyToPay}
                           handleClick={this.handleClick}
                           clearMatchesAdd={this.clearMatchesAdd}
                           handleChange={this.handleChange}
                           addBet={this.addBet}
                           odds={odds}
                           moneyToWin={moneyToWin}
                           checkFlag={checkFlag}
                        />
                     )}
                  />
                  <Route
                     exact
                     path="/coupons"
                     render={() => (
                        <Coupons
                           matches={matches}
                           coupons={coupons}
                           money={money}
                           checkResult={this.checkResult}
                           checkFlag={checkFlag}
                           results={results}
                        />
                     )}
                  />
               </Switch>
               <footer>Rafał Drożdż </footer>
            </Router>
         </>
      );
   }
}

export default App;

// let stateResults = [...this.state.results];
//          let winnings = [];
//          let matchAdd = [...coupons[i].matchAdd];
//          console.log(matchAdd);
//          for (let a = 0; a < matchAdd.length; a++) {
//             winnings = winnings.concat(
//                stateResults.filter((item) => item.result === matchAdd[a].tip)
//             );
//          }
//          console.log(stateResults);
//          if (winnings.length > 10) {
//             winnings.length = winnings.length / 10;
//          }

//          for (let a = 0; a < matchAdd.length; a++) {
//             matchAdd = matchAdd
//                .filter((item) => item.id === winnings[a].id)
//                .map(
//                   (item) =>
//                      (item = {
//                         id: item.id,
//                         hosts: item.hosts,
//                         visitors: item.visitors,
//                         tip: item.tip,
//                         odds: 3.25,
//                         active: true,
//                      })
//                );
//          }

//          console.log(winnings);
//          console.log(matchAdd);
//
