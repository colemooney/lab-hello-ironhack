import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
      <nav>
          <img src="/images/ironhack-logo.svg"></img>
          <img src="/images/menu-top.svg"></img>
      </nav>
      <div className="top">
        <h1> Say hello to ReactJS </h1>
        <p>You will earn a Frontend framework from scratch, to become a Ninka Developer.</p>
        <br></br>
        <button>Awesome!</button>
        <br></br><br></br>
        </div>
        <div className="bottom">
        <ul className="bottomlist">
                    <li>
                        <img src="/images/icon1.png"></img>
                        <h4>Declarative</h4>
                        <p>React makes it painless to create interactive UI's.</p>
                    </li>
                    <li>
                        <img src="/images/icon2.png"></img>
                        <h4>Components</h4>
                        <p>Build encapsulated components that manage their state.</p>
                    </li>
                    <li>
                        <img src="/images/icon3.png"></img>
                        <h4>Single-Way</h4>
                        <p>A set of immutable values are passed to the component's.</p>
                    </li>
                    <li>
                        <img src="/images/icon4.png"></img>
                        <h4>JSX</h4>
                        <p>Statistically typed, designed to run on modern browsers.</p>
                    </li>
                </ul>
                </div>
      </div>
    );
  }
}


export default App;