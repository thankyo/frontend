import React, {Component} from "react";

export default class Brand extends Component {
    render() {
        return (
            <div className="nav-left">
                <div className="nav-item is-brand">
                    <span className="icon"><i className="fa fa-heart"></i></span>
                    <span className="icon"></span>
                    <span className="icon">Love.it</span>
                </div>
            </div>
        )
    }
}