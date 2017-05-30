import React, {Component} from "react";
import Wrap from "./Wrap";

export default class Idea extends Component {
    render() {
        return (
            <Wrap className="is-info">
                <h1 className="title is-1 hand-written">Idea</h1>
                <br/>
                <div className="title is-3 has-text-left">
                    <h3>For creativity to grow it needs fuel</h3>
                    <h3 className="hand-written">Everybody does</h3>
                    <br/>
                    <h3>How much fuel does it need?</h3>
                    <h3 className="hand-written">Not much</h3>
                    <h3></h3>
                    <br/>
                    <h3>Just a dime, every time</h3>
                    <h3 className="hand-written">Combined, this is enough to continue creating.</h3>
                    <br/>
                </div>
                <br/>
                <h1 className="title is-1 hand-written">Just a dime, every time</h1>
            </Wrap>
        )
    }
}
