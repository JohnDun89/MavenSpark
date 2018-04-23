import React from 'react';
import axios from 'axios';
import CoinComponent from './CoinComponent.js'
import SelectItem from './SelectItem.js'
import SlectItem from './SelectItem.js';

class CustomerInterface extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: [],
        updated: false,
        selectedItem: " ",
        selectedValue: " ",
        total: 0
  
    };

        this.updateRequest = this.updateRequest.bind(this)
        this.chocolate = this.chocolate.bind(this)
        this.juice = this.juice.bind(this)
        this.crisps = this.crisps.bind(this)
        this.total = this.total.bind(this)
        this.purchase = this.purchase.bind(this)
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

    chocolate() {
        this.setState({selectedItem: "Chocolate"})
        this.setState({selectedValue: 0.65})
    }

    crisps() {
        this.setState({selectedItem: "Crisps"})
        this.setState({ selectedValue: 1 })
    }

    juice() {
        this.setState({ selectedItem: "Juice" })
        this.setState({ selectedValue: 1.5 })

    }

    total(input) {
        this.setState({ total: input })
        console.log(this.state.total)

    }

    purchase = () => {
        if (this.state.selectedValue === this.state.total ){
            const body = this.state.selectedItem
            console.log("item purchased")
            axios.post(`http://localhost:4567/buy/`, body).then(res =>{
                console.log(res)
            }).catch(error => {
                console.log(error)
                axios.get(`http://localhost:4567/items/`)
                    .then(res => {
                        const items = res.data;
                        this.setState({ items })                       
                        console.log(res)
                        this.refs.child.display();
                    });
            })
        }}




    render() {
        return (
            <div>
                <button onClick={this.props.action}>Restock</button>
                <ul>
                    {this.state.items.map(item =>
                        <li>
                            {item.name + " £:" + item.price + "  Quantity: " + item.quanitityInMachine}                        
                        </li>)
                    }
                </ul>
                <h2> {this.state.selectedItem}</h2>                  
                <div>       
                    < SelectItem crisp={this.crisps} choc={this.chocolate}  juice={this.juice}/>           
                    < CoinComponent total={this.total}  ref="child"/>
                    <button onClick={this.purchase} >BuyItem</button>
                </div>

            </div>
            
        );
    }
}

export default CustomerInterface;