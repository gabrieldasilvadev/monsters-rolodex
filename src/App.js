import {Component} from "react";
import "./App.css";

class App extends Component {

   constructor() {
      super();
      this.state = {
         monsters: [
            {
               id: 1,
               name: 'Linda'
            },
            {
               id: 2,
               name: 'Frankl'
            },
            {
               id: 3,
               name: 'Jacky'
            },
            {
               id: 4,
               name: 'Andrei'
            }
         ]
      };
   }

   render() {
      return (
         <div className="App">
            {
               this.state.monsters.map((monster) => {
                  return (
                     <dov key={monster.id}>
                        <h1>{monster.name}</h1>
                     </dov>
                  )
               })
            }
         </div>
      );
   }
}

export default App;
