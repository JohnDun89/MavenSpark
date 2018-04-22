import React from 'react';
import axios from 'axios';


class CoinComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            nickle: 0,
            dime: 0,
            quarter: 0,
            dollar: 0,
            updated: false,
            total: 0
        };   
       
        this.postTotal = this.postTotal.bind(this)
        this.getTotal = this.getTotal.bind(this)
        this.updateRequest = this.updateRequest.bind(this)

    }

    insertCoin = (type) => {
        this.setState({ updated: false })

        const stateSelect = this.state[type]
        console.log(type)
        this.setState({ [type]: this.state[type] +1 }, () => {this.postTotal()
        })
        // console.log(this.state.dollar)
        // this.postTotal()
    }


    postTotal = () => {
    const sendObject = this.state
      return axios.put(`http://localhost:4567/items/coinsin/`, sendObject).then(res =>{
          console.log(res)
          this.getTotal()

      })

    }

    getTotal = () => {
        axios.get(`http://localhost:4567/items/getcoins`)
            .then(res => {
                console.log(res)
                const resData = res.data;
                const newTotal = resData

                this.setState({ total: newTotal })

            });
    }



    componentWillUpdate() {
        this.updateRequest()
    }

    // componentDidUpdate(){
    //     this.updateRequest()
    // }

    updateRequest =() => {
        if (this.state.updated === false) {
            this.setState({ updated: true })
            axios.get(`http://localhost:4567/items/getcoins`)
                .then(res => {
                    console.log("hit")
                    console.log(res)
                    const resData = res.data;
                    const newTotal = resData

                    this.setState({ total: newTotal })
                    console.log(this.state.total)
                });
        }
    }



    

    render() {
        return (
            <div>
                <h2>Insert Coins</h2>
                <button onClick={this.insertCoin.bind(this, "nickle")}>Nickle</button>
                <p>{this.state.nickle}</p>
                <button onClick={this.insertCoin.bind(this,"dime")}>Dime</button>
                <p>{this.state.dime}</p>
                <button onClick={this.insertCoin.bind(this, "quarter")}>Quarter</button>
                <p>{this.state.quarter}</p>
                <button onClick={this.insertCoin.bind(this, "dollar")}>Dollar</button>
                <p>{this.state.dollar}</p>
                <div>
                    <h2>{this.state.total}</h2>
                </div>
            </div>
            
            
        );
    }
}

export default CoinComponent ;