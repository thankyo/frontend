import React, {Component} from "react";
import Navigation from "../Navigation";
import Profile from "../user/Profile";
import PaymentTransaction from "./PaymentTransaction";
import ComponentWrap from "../ComponentWrap";
import Payment from "./Payment";

export default class Payments extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <ComponentWrap>
                    <Profile id={this.props.params.id}/>
                </ComponentWrap>
                <ComponentWrap>
                    <Payment/>
                </ComponentWrap>
                <ComponentWrap>
                    <PaymentTransaction id={this.props.params.id}/>
                </ComponentWrap>
            </div>
        );
    }
}

