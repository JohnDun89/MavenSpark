import React from 'react';
import MaintanenceInterface from "./MaintenanceInterface.js";
import CustomerInterface from "./CustomerInterface.js";
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import axios from 'axios';
import Popup from 'react-popup';



class MainComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { BoxOne: true };

this.toggleBoxOneState = this.toggleBoxOneState.bind(this)

    }

    toggleBoxOneState() {
        console.log(this.state)
        this.setState({ BoxOne: !this.state.BoxOne })
    }

    componentDidMount() {
        axios.get(`http://localhost:4567/items/`)
            .then(res => {
                const items = res.data;
                this.setState({ items })
                console.log(res)
            })
    }


    transition(Component, callback, boolean) {
        return (         
                <Component action={callback } />
        )
    }

    renderToggle(Component1, Component2, StateBoolean, toggleFunction, transition) {
        if (StateBoolean === true) {
            return (
                    <div >
                        {transition(Component1, toggleFunction)}
                    </div>
            )
        }
        if (StateBoolean === false) {
            return (
                <div  >
                  
                        <Component2 close={toggleFunction || StateBoolean} />
              
                </div>
            )
        }
    }

    render() {
        document.getElementById('popupContainer')

        return (
            <div id="main-component">
            <div id="box">
                {this.renderToggle(CustomerInterface, MaintanenceInterface, this.state.BoxOne, this.toggleBoxOneState, this.transition)} 
           </div>
                <Popup />

            </div>
        );
    }
}

export default MainComponent;