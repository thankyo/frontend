import React, {Component} from "react";
import Wrap from "./Wrap";

export default class Idea extends Component {
    render() {
        return (
            <div className="is-success">
                <Wrap>
                    <h1 className="title is-1 hand-written">Idea</h1>
                    <br/>
                    <div className="title is-3 has-text-left">
                        <h3>For creativity to grow it needs fuel</h3>
                        <h3 className="is-2 hand-written">Everybody do</h3>
                        <br/>
                        <h3>How much fuel does it needs?</h3>
                        <h3></h3>
                        <br/>
                        <h3>Not much - just a dime, every time</h3>
                        <h3 className="hand-written">Combine this and this is enough to continue creating.</h3>
                        <br/>
                    </div>
                    <br/>
                    <h1 className="title is-1 hand-written">Just a dime, every time</h1>
                </Wrap>
            </div>
        )
    }
}
