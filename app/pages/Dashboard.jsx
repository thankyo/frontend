import React, {Component} from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Profile from "../components/Profile";
import ThankTransaction from "../components/ThankTransaction";
import PaymentTransaction from "../components/PaymentTransaction";
import Thank from "../components/Thank";
import Braintree from "../components/payment/Braintree";


export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <section className="hero is-primary">
                    <div className="hero-body">
                        <div className="container">
                            <div className="columns is-vcentered">
                                <div className="column">
                                    <p className="title">
                                        Dashboard
                                    </p>
                                    <p className="subtitle">
                                        <strong>Good is strong in you</strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
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
                                        <Profile id="me"/>
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
                                        <PaymentTransaction id="me"/>
                                    </div>
                                </div>
                                <br/>
                                <div className="card">
                                    <div className="card-content">
                                        <ThankTransaction id="me"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}