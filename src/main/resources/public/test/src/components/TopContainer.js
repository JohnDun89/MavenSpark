import React from 'react';
import Splash from './splash';

class TopContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    renderContent() {
        const splash = [1].map((number) =>
            <div key={number.toString()}>
                <Splash splashClicked={this.toggleContent} introText={this.state.introText} />
            </div>)

        if (this.state.displayMainContent === true) {
            return (
                <ReactCSSTransitionGroup
                    transitionEnter={true}
                    transitionName="introduction"
                    transitionAppear={true}
                    transitionAppearTimeout={1500}

                    transitionLeaveTimeout={1500}
                    transitionEnterTimeout={1500}
                >

                    <div>

                        < BoxContainer />
                    </div>
                </ReactCSSTransitionGroup >
            )
        } else {
            return (
                <div>
                    {splash}
                </div>
            )
        }
    }

    toggleContent() {
        this.setState({ displayMainContent: true })
    }






    render() {

        return (
            <div>
                {this.renderContent() || this.toggleContent()}

            </div>
        )
    }
}

export default TopContainer;