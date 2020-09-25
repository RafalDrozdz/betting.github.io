import React from "react";
import "./App.css";
import Match from "./Match";

class App extends React.Component {
   state = {
      matches: [],
   };
   handleClick = (event) => {
      const exchange = 0;
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
