import React from "react";
import "./App.css";
import Match from "./Match";

class App extends React.Component {
   state = {
      matches: [],
      matchesAdd: [],
   };
   handleClick = (id, type, active, exchange) => {
      let matches = [...this.state.matches];
      let matchesAdd = [...this.state.matchesAdd];
      console.log(active);
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
                        type: type,
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
                           })
                     )
               );
         } else {
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
                           type: type,
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
      return <div className="matches">{matches}</div>;
   }
}

export default App;
