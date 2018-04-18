import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from "./main.js";
import axios from 'axios';
import ItemsDisplay from './components/ItemsDisplay';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      data: { type: "juice", quantity: "10"}
    };

    this.addItem = this.addItem.bind(this)
    this.update = this.update.bind(this)
    this.post = this.post.bind(this)
  }
  
  componentDidMount() {
    axios.get(`http://localhost:4567/items/`)
      .then(res => {
        console.log(res)
      const items = res.data;
      this.setState({items})
        });    
  }


  
  //
  addItem() {
    const sendObject = { body : this.state.data }
    axios.post(`http://localhost:4567/items/add/` )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  post() {
    const sendObject = { body: this.state.data }

    const request = new XMLHttpRequest()
    request.open('Put','http://localhost:4567/add/');
    request.setRequestHeader('Content-Type', 'application/json');
    request.addEventListener('load', function () {
      if (this.status !== 201) {
        return;
      };
      const responseBody = JSON.parse(this.responseText);
     console.log(responseBody)
    });
    request.send(JSON.stringify(sendObject));
  };
  

  update() {
    axios.get(`http://localhost:4567/items/`)
      .then(res => {
        console.log(res)
        const items = res.data;
        this.setState({ items })
      });    
  }

  render() {
    return (
      <div className="App">
       < Main />
       < ItemsDisplay initialState={this.state.items}/>
        <ul>
          {this.state.items.map(item => <li>{item.name + " £" + item.price + " number:" + item.quanitityInMachine}</li>)}
        </ul>

        <button onClick={this.post}>Add Juice</button>
      </div>
    );
  }
}

export default App;
