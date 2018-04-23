import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from "./main.js";
import axios from 'axios';

import MainComponent from "./components/MainComponent.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      data: { type: "juice", quantity: "10"}
    };

  }


  render() {
    return (
      <div className="App">
        < MainComponent />
      </div>
    );
  }
}

export default App;

