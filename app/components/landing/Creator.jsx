import React, {Component} from "react";
import ComponentWrap from "../ComponentWrap";

class CreatorHow extends Component {
    render() {
        return (
            <div className="tile is-parent is-4">
                <article className="tile is-child notification is-success has-text-left stat-tile">
                    <p className="title">
                        <span className="fa fa-handshake-o"/>
                    </p>
                    <p className="subtitle is-3">Social contract</p>
                    <p className="subtitle is-5">
                        Tipping is a widely present in our daily life.
                        But there are so many questions - how much to tip? when to tip? how to tip?<br/>
                        We are creating a social contract, that would be clear to everyone.<br/>
                    </p>
                </article>
            </div>
        )
    }
}

class CreatorWhyUs extends Component {
    render() {
        return (
            <div className="tile is-parent is-4">
                <article className="tile is-child notification is-success has-text-left stat-tile">
                    <p className="title">
                        <span className="fa fa-heart"/>
                    </p>
                    <p className="subtitle is-3">Freedom to create more</p>
                    <p className="subtitle is-5">
                        Art is here to change the world.<br/>
                        It's hard, it takes all of your time, but.<br/>
                        <strong>You'll share it regardless.</strong><br/>
                        We are here to help you focus on your art and take care of your bills.
                    </p>
                </article>
            </div>
        )
    }
}

class CreatorHowYouGetPaid extends Component {
    render() {
        return (
            <div className="tile is-parent is-4">
                <article className="tile is-child notification is-success has-text-left stat-tile">
                    <p className="title">
                        <span className="fa fa-credit-card-alt"/>
                    </p>
                    <p className="subtitle is-3">How you get paid</p>
                    <p className="subtitle is-5">
                        LoveIt handles all of the payments, <strong>you never have to deal with integration nightmare.</strong> Every click turns into money on your bank account.
                    </p>
                </article>
            </div>
        )
    }
}

class CreatorHero extends Component {
    render() {
        return (
            <section className="hero is-primary is-large header-image creator-image">
                <div className="has-text-centered">
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <h1 className="title is-1">
                                Artist
                            </h1>
                            <h2 className="subtitle is-3">
                                Focus on your art, not bills<br/>
                            </h2>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

class CreatorPoints extends Component {
    render() {
        return (
            <div>
                <div className="tile is-ancestor">
                    <CreatorWhyUs/>
                    <CreatorHow/>
                    <CreatorHowYouGetPaid/>
                </div>
            </div>
        )
    }
}

export default class Creator extends Component {
    render() {
        return (
            <div>
                <ComponentWrap>
                    <CreatorHero/>
                </ComponentWrap>
                <ComponentWrap>
                    <CreatorPoints/>
                </ComponentWrap>
            </div>
        );
    };
};
