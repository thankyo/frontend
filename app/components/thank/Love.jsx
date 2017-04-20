import React, {Component} from "react";
import Navigation from "../Navigation";
import Profile from "../user/Profile";
import Transaction from "./Transaction";
import Url from "./Url";
import ComponentWrap from "../ComponentWrap";

import { CodeGenerator } from "../documentation/Overview";


export default class Love extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <ComponentWrap>
                    <Profile id={this.props.params.id}/>
                </ComponentWrap>
                <ComponentWrap>
                    <Url onSubmit={(values) => console.log(values)}/>
                </ComponentWrap>
                <ComponentWrap>
                    <Transaction id={this.props.params.id}/>
                </ComponentWrap>
            </div>
        );
    }
}