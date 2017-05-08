import React, {Component} from "react";
import ComponentWrap from "../ComponentWrap";
import Brand from "../Brand";
import {Link} from "react-router";

class CreatorHead extends Component {
    render() {
        return (
            <div className="hero-head">
                <header className="nav">
                    <div className="container">
                        <Brand/>
                        <div className="nav-right">
                            <div className="nav-item is-brand">
                                <Link to="/creator" className="is-active">Creator</Link>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}

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
                        LoveIt handles all of the payments, <strong>you never have to deal with integration
                        nightmare.</strong> Every click turns into money on your bank account.
                    </p>
                </article>
            </div>
        )
    }
}

class CreatorHero extends Component {
    render() {
        return (
            <section className="hero is-large is-primary">
                <div className="has-text-centered">
                    <CreatorHead/>
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <h1 className="title is-1">
                                Fund your passion
                            </h1>
                            <h2 className="subtitle is-3">
                                Connect to your most loyal funds<br/>
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
            <div className="tile is-ancestor">
                <CreatorWhyUs/>
                <CreatorHow/>
                <CreatorHowYouGetPaid/>
            </div>
        )
    }
}

export default class Creator extends Component {
    render() {
        return (
            <div>
                <CreatorHero/>
                <ComponentWrap>
                    <CreatorPoints/>
                </ComponentWrap>
            </div>
        );
    };
};
