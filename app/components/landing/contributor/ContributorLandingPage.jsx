import React, {Component} from "react";
import FacebookYesNoButton from "../FacebookYesNoButton";
import Brand from "../../Brand";
import FacebookLoginButton from "../FacebookLoginButton";
import { Link } from "react-router";
import Footer from "../../Footer";
import ContributorSocialProof from './ContributorSocialProof';

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

class ContributorGiveBack extends Component {
    render() {
        return (
            <section className="hero is-large">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="title is-1">
                            We love what they do
                        </div>
                        <div className="title is-3">
                            It's time to give back
                        </div>
                        <FacebookYesNoButton></FacebookYesNoButton>
                    </div>
                </div>
            </section>
        )
    }
}

class ContributorLoveWithAMeaning extends Component {
    render() {
        return (
            <section className="hero is-large">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="title is-1">
                            We can change the world if we show a little support
                        </div>
                        <div className="title is-3">
                            Do you want to try
                        </div>
                        <FacebookYesNoButton></FacebookYesNoButton>
                    </div>
                </div>
            </section>
        )

    }
}

class ContributorHero extends Component {
    render() {
        return (
            <section className="hero is-large header-image">
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
                            Make world better
                        </h1>
                        <h2 className="subtitle is-3">
                            Give back to what you love
                        </h2>
                        <FacebookLoginButton/>
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
                <ContributorSmile/>
                <ContributorThink/>
                <ContributorMove/>
                <ContributorLoveWithAMeaning/>

                <Footer/>
            </div>
        );
    }
}