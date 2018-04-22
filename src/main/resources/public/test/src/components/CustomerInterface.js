import React from 'react';
import axios from 'axios';
import CoinComponent from './CoinComponent.js'

class CustomerInterface extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: [],
        updated: false };

        this.updateRequest = this.updateRequest.bind(this)
    }

    componentWillMount () {
        axios.get(`http://localhost:4567/items/`)
            .then(res => {
                const items = res.data;
                this.setState({ items })
                console.log(res)
            });
    }

    componentWillUpdate() {
     this.updateRequest()    
    }

    updateRequest() {
        if(this.state.updated === false) {
            this.setState({updated: true})
            axios.get(`http://localhost:4567/items/`)
                .then(res => {
                    const items = res.data;
                    this.setState({ items })
                    console.log(res)
                });
        }
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.items.map(item =>
                        <li>
                            {item.name + " £:" + item.price + "  Quantity: " + item.quanitityInMachine}                        
                        </li>)
                    }
                </ul>
                <button onClick={this.props.action}>Restock</button>
                <div>
                    < CoinComponent />
                </div>
            </div>
            
        );
    }
}

export default CustomerInterface;