import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from "./main.js";
import axios from 'axios';
import ItemsDisplay from './components/ItemsDisplay';
import MainComponent from "./components/MainComponent.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      data: { type: "juice", quantity: "10"}
    };

    // this.addItem = this.addItem.bind(this)
    // this.update = this.update.bind(this)
  }

  // addItem() {
  //   const sendObject = this.state.items
  //   axios.put(`http://localhost:4567/add/`,  sendObject )
  //     .then(res => {
  //       console.log(res);
  //       console.log(res.data);
  //     })
  // }

  // update() {
  //   axios.get(`http://localhost:4567/add/`)
  //     .then(function (response) {
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });    
  // }

  render() {
    return (
      <div className="App">
        < MainComponent />
      </div>
    );
  }
}

export default App;

{/* < Main />
  < ItemsDisplay initialState={this.state.items} />
  <ul>
    {this.state.items.map(item => <li>{item.name + " £" + item.price + " number:" + item.quanitityInMachine}</li>)}
  </ul>

  <button onClick={this.addItem}>Add Juice</button> */}