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
        this.displayTotal = this.displayTotal.bind(this)
        this.reciveValue = this.reciveValue.bind(this)
        // this.updateMehtod = this.updateMethod.bind(this)
        // this.getTotal = this.getTotal.bind(this)
        // this.postTotal = this.postTotal.bind(this)
this.updateRequest = this.updateRequest.bind(this)

    }

    insertCoin = (type) => {

        const stateSelect = this.state[type]
        console.log(type)
        this.setState((state) => ({ [type]: this.state[type] +1 }))
        console.log(this.state.dollar)
        // this.reciveValue()
        // this.displayTotal()


    }

    displayTotal  () {
       const sendObject = this.state
        axios.put(`http://localhost:4567/items/coinsin/`, sendObject )
            .then(function (response) {
                console.log('saved successfully', response.data)
            })
    }

    reciveValue() {
        axios.get(`http://localhost:4567/items/getcoins`)
            .then(res => {
                console.log(res)
                const resData = res.data;
                const newTotal = resData
                
                this.setState({ total: newTotal })
            });
    }

    getTotal = () => {
       return axios.get(`http://localhost:4567/items/getcoins`)
            .then(res => {
                console.log(res)
                const resData = res.data;
                const newTotal = resData

                this.setState({ total: newTotal })
            });
    }

    postTotal = () => {
    const sendObject = this.state
      return axios.put(`http://localhost:4567/items/coinsin/`, sendObject)

    }

    // updateMethod = () => {
    //     axios.all([this.postTotal(), this.getTotal()])
    //         .then(axios.spread(function (postRes, getRes) {
    //             console.log('User', getRes.data);
    //             console.log('Repositories', postRes.data);
    //             const resData = getRes.data;
    //             const newTotal = resData
    //             this.setState({ total: newTotal })
    // }))
    // }

    componentWillUpdate() {
        this.updateRequest()
    }

    updateRequest() {
        if (this.state.updated === false) {
            this.setState({ updated: true })
            axios.get(`http://localhost:4567/items/getcoins`)
                .then(res => {
                    const resData = res.data;
                    const newTotal = resData

                    this.setState({ total: newTotal })
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