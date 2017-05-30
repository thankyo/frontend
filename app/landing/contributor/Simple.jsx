import React, {Component} from "react";
import Wrap from "./Wrap";

export default class Simple extends Component {
    render() {
        return (
                <Wrap className="is-info">
                    <h1 className="title is-1 hand-written">Simple and profound</h1>
                    <br/>
                    <div className="title has-text-left">
                        <h1 className="is-1">Small gesture, with enormous impact</h1>
                        <br/>
                        <h2 className="is-2 hand-written">Support creators</h2>
                        <br/>
                        <h2 className="is-2 hand-written">Give freedom</h2>
                        <br/>
                        <h2 className="is-2 hand-written">Healthy habit</h2>
                        <br/>
                        <h2 className="is-2 hand-written">Give back regularly</h2>
                        <br/>
                        <h2 className="is-2 hand-written">This is - a simple prosperity engine</h2>
                    </div>
                    <h1 className="title is-1 hand-written">This feels great too</h1>
                </Wrap>
        )
    }
}
