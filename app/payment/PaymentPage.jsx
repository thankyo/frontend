import React, {Component} from "react";
import Navigation from "components/Navigation";
import Profile from "components/user/Profile";
import PaymentTransaction from "./PaymentTransaction";
import ComponentWrap from "components/ComponentWrap";
import Footer from "../components/Footer";

export default class PaymentPage extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <ComponentWrap>
                    <Profile id={this.props.params.id}/>
                </ComponentWrap>
                <ComponentWrap>
                    <PaymentTransaction id={this.props.params.id}/>
                </ComponentWrap>
                <Footer/>
            </div>
        );
    }
}

