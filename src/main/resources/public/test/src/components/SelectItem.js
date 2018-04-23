import React from 'react';

class SlectItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { };
    }



    render() {
        return (
            <div>
                <button onClick={this.props.choc} >Chocolate</button>
                <button onClick={this.props.crisp}>Crisps</button>
                <button onClick={this.props.juice}>Juice</button>
            </div>
        );
    }
}

export default SlectItem;