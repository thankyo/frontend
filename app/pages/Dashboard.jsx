import React, {Component} from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Profile from "../components/user/Profile";
import ProfileMenu from "../components/ProfileMenu";
import ThankTransaction from "../components/ThankTransaction";
import PaymentTransaction from "../components/PaymentTransaction";
import Thank from "../components/Thank";
import Braintree from "../components/payment/Braintree";


export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <div className="tile is-ancestor">
                    <div className="tile is-parent">
                        <article className="tile is-child notification is-warning has-text-centered stat-tile">
                            <br/>
                            <p className="title">Hello World</p>
                        </article>
                    </div>
                    <div className="tile is-parent">
                        <article className="tile is-child notification is-info has-text-centered stat-tile">
                            <p className="title">212</p>
                            <p className="subtitle"><i className="fa fa-twitter"></i></p>
                        </article>
                    </div>
                    <div className="tile is-parent">
                        <article className="tile is-child notification is-primary has-text-centered stat-tile">
                            <p className="title">212</p>
                            <p className="subtitle"><i className="fa fa-facebook"></i></p>
                        </article>
                    </div>
                    <div className="tile is-parent">
                        <article className="tile is-child notification is-danger has-text-centered stat-tile">
                            <p className="title">212</p>
                            <p className="subtitle"><i className="fa fa-google"></i></p>
                        </article>
                    </div>
                    <div className="tile is-parent">
                        <article className="tile is-child notification is-dark has-text-centered stat-tile">
                            <p className="title">212</p>
                            <p className="subtitle"><i className="fa fa-github"></i></p>
                        </article>
                    </div>
                </div>
                <div className="container profile">
                    <Profile id="my"/>
                    <ProfileMenu/>
                    <div className="section">
                        <div className="columns">
                            <div className="column is-one-third">
                                <div className="content">
                                    <div className="card">
                                        <div className="card-content">
                                            <Thank/>
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="card">
                                        <div className="card-content">
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="card">
                                        <div className="card-content">
                                            <Braintree/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="column">
                                <div className="content">
                                    <div className="card">
                                        <div className="card-content">
                                            <PaymentTransaction id="my"/>
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="card">
                                        <div className="card-content">
                                            <ThankTransaction id="my"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}