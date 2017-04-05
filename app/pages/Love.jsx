import React, {Component} from "react";
import Navigation from "../components/Navigation";
import Profile from "../components/user/Profile";
import Transaction from "../components/thank/Transaction";
import Url from "../components/thank/Url";
import ComponentWrap from "../components/ComponentWrap";


export default class Love extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <ComponentWrap>
                    <Profile id={this.props.params.id}/>
                </ComponentWrap>
                <ComponentWrap>
                    <Url/>
                </ComponentWrap>
                <ComponentWrap>
                    <Transaction id={this.props.params.id}/>
                </ComponentWrap>
            </div>
        );
    }
}