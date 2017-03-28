import React, {Component} from "react";
import Navigation from "../components/Navigation";
import Profile from "../components/Profile";
import ProfileMenu from "../components/ProfileMenu";
import PaymentTransaction from "../components/PaymentTransaction";
import Braintree from "../components/payment/Braintree";


export default class Payments extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <div className="container profile">
                    <Profile id={this.props.params.id}/>
                    <ProfileMenu/>
                </div>
                <div className="container box">
                    <div className="columns">
                        <div className="column is-6">
                            <Braintree/>
                        </div>
                        <div className="column is-6">
                            <Braintree/>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="container box">
                    <PaymentTransaction id={this.props.params.id}/>
                </div>
            </div>
        );
    }
}

