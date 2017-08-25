import React, {Component} from "react";

export default class Brand extends Component {
    render() {
        return (
            <div className="nav-left">
                <div className="nav-item is-brand">
                  <img src="/img/loveit_logo.svg" width={100} height={40} alt="LoveIt logotype"/>
                </div>
            </div>
        )
    }
}