import React, {Component} from "react";
import Navigation from "../components/Navigation";
import Profile from "../components/user/Profile";
import ProfileMenu from "../components/ProfileMenu";
import PaymentTransaction from "../components/PaymentTransaction";
import Braintree from "../components/payment/Braintree";
import Withdraw from "../components/payment/Withdraw";
import ComponentWrap from "../components/ComponentWrap";

export default class Payments extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <ComponentWrap>
                    <Profile id={this.props.params.id}/>
                </ComponentWrap>
                <ComponentWrap>
                    <div className="tile is-ancestor">
                        <div className="tile is-parent is-warning is-6">
                            <article className="tile is-child notification is-info has-text-centered stat-tile">
                                <Braintree/>
                            </article>
                        </div>
                        <div className="tile is-parent is-info is-6">
                            <article className="tile is-child notification is-info has-text-centered stat-tile">
                                <Withdraw/>
                            </article>
                        </div>
                    </div>
                </ComponentWrap>
                <ComponentWrap>
                    <PaymentTransaction id={this.props.params.id}/>
                </ComponentWrap>
            </div>
        );
    }
}

