import React, {Component} from "react";
import FacebookYesNoButton from "./FacebookYesNoButton";

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


export default class Contributor extends Component {
    render() {
        return (
            <div>
                <ContributorSmile/>
                <ContributorThink/>
                <ContributorMove/>
                <ContributorLoveWithAMeaning/>
            </div>
        );
    }
}