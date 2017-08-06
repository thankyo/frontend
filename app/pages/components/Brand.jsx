import React, {Component} from "react";
import Icon from "./Icon";

export default class Brand extends Component {
    render() {
        return (
            <div className="nav-left">
                <div className="nav-item is-brand">
                    <Icon fa="heart" text=" Loveit"/>
                </div>
            </div>
        )
    }
}