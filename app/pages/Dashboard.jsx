import React, {Component} from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Profile from "../components/Profile";
import Payment from "../components/Payment";
import Thank   from '../components/Thank';


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
                                    <p classNme="subtitle">
                                        <strong>Good is strong in you</strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="columns">
                    <div className="column is-one-third">
                        <div className="section">
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
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="section">
                            <div className="content">
                                <div className="card">
                                    <div className="card-content">
                                        <Payment id="me"/>
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