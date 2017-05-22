import React, {Component} from "react";
import Navigation from "components/Navigation";

export default class NotFound extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <div className="section">
                    <div className="container has-text-centered">
                        <p className="title">404</p>
                        <p className="subtitle">You can be proud of yourself, you broke it.</p>
                    </div>
                </div>
            </div>
        );
    }
}