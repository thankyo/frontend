import React, {Component} from "react";

export default class HowItWorks extends Component {
    constructor() {
        super();

        this.state = {clicked: false};
        this.handleLoveItPress = this.handleLoveItPress.bind(this);
    }

    handleLoveItPress() {
        let clicked = !this.state.clicked;
        this.setState({clicked})
    }

    render() {
        let {clicked} = this.state;
        return (
            <div className="section container">
                <div className="content has-text-centered">
                    <h1 className="title is-1 hand-written">
                        How this works
                    </h1>

                    <div className="columns">
                        <div className="column is-3 is-hidden-mobile">
                        </div>
                        <div className="column is-6 has-text-centered">
                            <div>
                                <h2 className="title is-2">Here is LoveIt button</h2>
                                <div className="title is-large">
                                    <a onClick={this.handleLoveItPress}><span
                                        className={clicked ? "tag is-large is-success" : 'tag is-large is-info'}>Love it</span></a>
                                </div>
                                <h4 className="title is-4">Whenever you <a onClick={this.handleLoveItPress}>click it</a>
                                </h4>
                                <h4 className={clicked ? "title is-4" : "title is-4 is-line-through"}>You send a dime to
                                    the creator</h4>
                                <h1 className="title is-1 hand-written">{clicked ? "Awesome right" : "Just click it"}</h1>
                            </div>
                        </div>
                        <div className="column is-2 is-hidden-mobile">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}