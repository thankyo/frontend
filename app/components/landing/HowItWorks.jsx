import React, {Component} from "react";
import ComponentWrap from "../ComponentWrap";

class EarningAndFees extends Component {
    render() {
        return (
            <div className="tile is-parent is-4">
                <article className="tile is-child notification is-success has-text-left stat-tile">
                    <p className="title">
                        <span className="fa fa-tag"></span>
                    </p>
                    <p className="subtitle is-3">Earnings and fees</p>
                    <p className="subtitle is-5">
                        LoveIt takes a <strong>flat 6% service fee</strong> on each withdrawal.
                    </p>
                </article>
            </div>
        )
    }
}

class Integration extends Component {
    render() {
        return (
            <div className="tile is-parent is-4">
                <article className="tile is-child notification is-success has-text-left stat-tile">
                    <p className="title">
                        <span className="fa fa-plug"></span>
                    </p>
                    <p className="subtitle is-3">Integration</p>
                    <p className="subtitle is-5">
                        We engineered LoveIt to let you <strong>start earning in minutes.</strong><br/>
                        Developer or not, this should take you no time at all.
                    </p>
                </article>
            </div>
        )
    }
}

class Support extends Component {
    render() {
        return (
            <div className="tile is-parent is-4">
                <article className="tile is-child notification is-success has-text-left stat-tile">
                    <p className="title">
                        <span className="fa fa-support"></span>
                    </p>
                    <p className="subtitle is-3">We’re here to help</p>
                    <p className="subtitle is-5">
                        <strong>We are available 24/7.</strong><br/>
                        Any issue, we'll handle in a shortest time.
                    </p>
                </article>
            </div>
        )
    }
}

class HowItWorksHero extends Component {
    render() {
        return (
            <section className="hero is-primary is-large header-image how-it-works-image">
                <div className="has-text-centered">
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <h1 className="title is-1">
                                How it works
                            </h1>
                            <h2 className="subtitle is-3">
                                The cogs behind the scene<br/>
                            </h2>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

class HowItWorksPoints extends Component {
    render() {
        return (
            <div>
                <div className="tile is-ancestor">
                    <EarningAndFees/>
                    <Integration/>
                    <Support/>
                </div>
            </div>
        )
    }
}

export default class HowItWorks extends Component {
    render() {
        return (
            <div>
                <ComponentWrap>
                    <HowItWorksHero/>
                </ComponentWrap>
                <ComponentWrap>
                    <HowItWorksPoints/>
                </ComponentWrap>
            </div>
        );
    }
};