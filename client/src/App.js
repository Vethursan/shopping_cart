import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppNavBar from "./components/AppNavbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavBar />
      </div>
    );
  }
}

export default App;
