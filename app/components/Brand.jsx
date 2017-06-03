import React, {Component} from "react";
import Icon from "components/Icon";

export default class Brand extends Component {
    render() {
        return (
            <div className="nav-left">
                <div className="nav-item is-brand">
                    <Icon fa="heart"/>
                    <span className="icon"></span>
                    <span className="icon">Love.it</span>
                </div>
            </div>
        )
    }
}