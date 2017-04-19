import React, {Component} from "react";

class Intro extends Component {
    render() {
        return (
            <div>
                <p className="title is-4">LoveIt Button for the Web</p>
                <p>
                    A single click on the LoveIt button will 'love' pieces of content on the web and send a small tip to your account.
                </p>
            </div>
        )
    }
}

class StepByStep extends Component {
    render() {
        return (
            <div>
                <p className="title is-4">Step-by-Step</p>
                <ol>
                    <li className="subtitle">
                        Choose URL or Page<br/>
                        <small>Pick the URL of a website you want to use with the love button.</small>
                    </li>
                    <li className="subtitle">
                        Code Configuration<br/>
                        <small>Paste the URL to the code configurator. Click the Get Code button to generate your like button code.</small>
                    </li>
                    <li className="subtitle">
                        Copy & Paste HTML snippet<br/>
                        <small>Copy and past the snippet into the HTML of the destination website.</small>
                    </li>
                </ol>
            </div>
        )
    }
}

class CodeGenerator extends Component {
    render() {
        return (
            <p>

            </p>
        )
    }
}

export default class Overview extends Component {
    render() {
        return (
            <div className="section">
                <div className="content">
                    <Intro/>
                    <hr/>
                    <StepByStep/>
                    <hr/>
                    <h1>I'm documented</h1>
                </div>
            </div>
        );
    }
}