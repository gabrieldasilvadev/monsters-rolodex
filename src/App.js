import { Component, useState } from "react";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: 'Vitor'
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>São Paulo Tech School.</p>
          <p>Hi {this.state.name}</p>
          <button onClick={() => {
            this.state.name = 'Gabriel'
            console.log(this.state)
          }}>Change name</button>
        </header>
      </div>
    );
  }
}

export default App;
