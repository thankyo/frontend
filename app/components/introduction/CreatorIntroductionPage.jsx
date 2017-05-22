import React, {Component} from "react";
import Welcome from "./Welcome";

import Navigation from "components/Navigation";
import authService from "service/auth";
import Footer from "components/Footer";

class YouAreHere extends Component {
    render() {
        return (
            <section className="hero is-medium is-info hand-written">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="title is-1">
                            You are here to change the world.
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

class WeAreHere extends Component {
    render() {
        return (
            <section className="hero is-medium hand-written">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="title is-1">
                            We are here to build <strong>tools</strong> you'll needed.
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

class StartingFrom extends Component {
    render() {
        return (
            <section className="hero is-medium hand-written is-info">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="title is-1">
                            Starting from microtip revolution.
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

class WhatToStartWith extends Component {
    render() {
        return (
            <section className="hero is-medium hand-written">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="title is-1">
                            Thank you for joining our alpha.<br/>
                            We are working non stop to deliver.<br/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

class BePatient extends Component {
    render() {
        return (
            <section className="hero is-medium hand-written is-info">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="title is-1">
                            Please be patient<br/>
                            Thank you!
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default class CreatorIntroduction extends Component {
    render() {
        let user = authService.getUserIdentity();
        return (
            <div>
                <Navigation/>
                <Welcome user={user}/>
                <YouAreHere user={user}/>
                <WeAreHere user={user}/>
                <StartingFrom/>
                <WhatToStartWith/>
                <BePatient/>
                <Footer/>
            </div>
        );
    }
};
