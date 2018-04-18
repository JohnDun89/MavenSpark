import React from 'react';
import axios from 'axios';


class ItemsDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: [] };
        this.check = this.check.bind(this)

    }


    check() {
        axios.get(`http://localhost:4567/items/`)
            .then(res => {
                console.log(res)
                const items = res.data;
                this.setState({ items })
            });
    }


    render() {
        return (
            <div>
                <h1>Contents</h1>
                <ul>
                    {this.state.items.map(item => <li>{item.name + " £" + item.price + " number:" + item.quanitityInMachine}</li>)}
                </ul>
            </div>
        );
    }
}

export default ItemsDisplay;