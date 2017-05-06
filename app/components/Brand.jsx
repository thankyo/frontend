import React, {Component} from "react";
import { Link } from 'react-router';

export default class Brand extends Component {
    render() {
        return (
            <div className="nav-left">
                <Link className="nav-item is-brand" to="/">
                    <span className="icon"><i className="fa fa-heart"></i></span>
                    <span className="icon"></span>
                    <span className="icon">Love.it</span>
                </Link>
            </div>
        )
    }
}