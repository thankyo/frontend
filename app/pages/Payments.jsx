import React, {Component} from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Profile from "../components/Profile";
import ProfileMenu from "../components/ProfileMenu";
import ThankTransaction from "../components/ThankTransaction";
import PaymentTransaction from "../components/PaymentTransaction";
import Thank from "../components/Thank";
import Braintree from "../components/payment/Braintree";


export default class Payments extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <div className="container profile">
                    <Profile id="me"/>
                    <ProfileMenu/>
                    <div className="section">
                        <PaymentTransaction id="me"/>
                    </div>
                </div>
            </div>
        );
    }
}