import React, {Component} from "react";
import Brand from "../../Brand";
import FacebookLogin from "../FacebookLogin";
import {Link} from "react-router";
import Footer from "../../Footer";
import ContributorSocialProof from "./ContributorSocialProof";
import What from './ContributorWhat';

class ContributorMove extends Component {
    render() {
        return (
            <section className="hero is-large is-warning">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="title is-1">
                            Some people make us
                        </div>
                        <div className="subtitle is-2">
                            <i>move<span className="fa fa-fire"></span></i>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

class ContributorThink extends Component {
    render() {
        return (
            <section className="hero is-large">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="title is-1">
                            Some people make us
                        </div>
                        <div className="subtitle is-2">
                            <i>think<span className="fa fa-lightbulb-o"></span></i>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

class ContributorSmile extends Component {
    render() {
        return (
            <section className="hero is-large is-warning">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="title is-1">
                            Some people make us
                        </div>
                        <div className="subtitle is-2">
                            <i>smile <span className="fa fa-smile-o"></span></i>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

class ContributorHero extends Component {
    render() {
        return (
            <section className="hero is-medium is-primary creator-image">
                <div className="hero-head">
                    <header className="nav">
                        <div className="container">
                            <div className="nav-left">
                                <Brand/>
                            </div>
                            <div className="nav-item">
                                <Link to="/creator">Creator</Link>
                            </div>
                        </div>
                    </header>
                </div>
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <h1 className="title is-1">
                            Tip like a boss
                        </h1>
                        <h2 className="subtitle is-3">
                            Microtip revolution
                        </h2>
                        <FacebookLogin>
                            <div className="button is-info is-outlined is-hovered is-large">
                                <span>Yeah!</span>
                            </div>
                        </FacebookLogin>
                    </div>
                </div>
            </section>
        );
    }
}


export default class Contributor extends Component {
    render() {
        return (
            <div>
                <ContributorHero/>
                <ContributorSocialProof/>
                <What/>
                <Footer/>
            </div>
        );
    }
}