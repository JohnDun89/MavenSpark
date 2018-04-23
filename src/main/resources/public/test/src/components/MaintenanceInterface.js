import React from 'react';
import axios from 'axios';
import immutable from 'object-path-immutable';


class ItemsDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            items: []
         };
        this.Return = {
                    juice: 0,
                    chocolate: 0,
                    crisps: 0
        }
        this.addItem = this.addItem.bind(this)
        this.submit = this.submit.bind(this)
        this.juiceState = this.juiceState.bind(this)
    }

    componentWillMount() {
        axios.get(`http://localhost:4567/items/`)
            .then(res => {
                console.log('saved successfully')
                const items = res.data;
                this.setState({ items })
            });  
    }

    componentDidMount() {
        axios.get(`http://localhost:4567/items/`)
            .then(res => {
                console.log('saved successfully')
                const items = res.data;
                this.setState({ items })
            })
    }



    

    addItem = () => {
        this.props.close
        const response = this.Return
        axios.put(`http://localhost:4567/add/`,  response  )
            .then(res => {
                console.log(res)
            })
    }

    increment = (name, action) => { 
        if (name === "Juice") {
            this.juiceState(action)
        } else if (name === "Chocolate") {
            this.chocState(action)
            } else {
                this.crispstate(action)
            }
        }       


    juiceState = (type) => {
        console.log(this.Return.juice)
       if (this.Return.juice >= 1 || type !== "sub") {
          return (type == "add") ? this.Return.juice += 1 : this.Return.juice -= 1;
        }  
    } 


    chocState = (type) => {
        console.log(this.Return.chocolate)
        if (this.Return.chocolate >= 1 || type !== "sub") {
            return (type == "add") ? this.Return.chocolate += 1 : this.Return.chocolate -= 1;
        }
    } 

    crispstate = (type) => {
        console.log(this.Return.crisps)
        if (this.Return.crisps >= 1 || type !== "sub") {
            return (type == "add") ? this.Return.crisps += 1 : this.Return.crisps -= 1;    
        }
    } 

    submit =() => {
        this.addItem()
        this.props.close()
    }

    display = (name) =>{
        console.log(name)
        return(<div><p>{this.Return[name]}</p></div>)
    }


 
    render() {
        return (
            <div> 
                <h1>Contents</h1>
                    <ul>
                        {this.state.items.map(item => 
                        <li>
                            
                            {item.name  + " number:" + item.quanitityInMachine}  
                            <button onClick={this.increment.bind(this, item.name, "add")}>Plus</button> 
                            <button onClick={this.increment.bind(this, item.name, "sub")}>Minus</button> 
                        </li>)
                        }
                    </ul>
                <button onClick={ this.submit }>Submit</button>
                <div>{this.juice}</div>
            </div>
        );
    }
}

export default ItemsDisplay;




