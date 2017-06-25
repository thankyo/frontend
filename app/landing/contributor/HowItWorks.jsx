import React, {Component} from "react";
import Wrap from "./Wrap";

export default class HowItWorks extends Component {
    constructor() {
        super();

        this.state = {clicked: false};
        this.handleLoveItPress = this.handleLoveItPress.bind(this);
    }

    handleLoveItPress() {
        let clicked = true;
        this.setState({clicked})
    }

    render() {
        let {clicked} = this.state;
        return (
            <Wrap className="is-info">
                <h1 className="title is-1 hand-written">
                    How this works
                </h1>
                <div className="title is-2">Here is the
                <h2 className="title is-2 is-large">
                    <a onClick={this.handleLoveItPress}><span className={clicked ? "tag is-large is-success" : 'tag is-large is-warning'}>Love it</span></a> button
                </h2>
                </div>
                <h4 className="title is-4">Whenever you <br/>
                    <a onClick={this.handleLoveItPress}>click it</a>
                </h4>
                <h4 className={clicked ? "title is-4" : "title is-4 is-line-through"}>you send 10 cents to the creator</h4>
                <a className="title is-1 hand-written" onClick={this.handleLoveItPress}>{clicked ? "Awesome" : "Do it"}</a>
            </Wrap>
        )
    }
}