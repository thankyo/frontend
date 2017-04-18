import React, {Component} from "react";

import ComponentWrap from "../ComponentWrap";

class ContributorHero extends Component {
    render() {
        return (
            <section className="hero is-primary is-large header-image contributor-image">
                <div className="has-text-centered">
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <h1 className="title is-1">
                                Giver
                            </h1>
                            <h2 className="subtitle is-3">
                                Great artist does not need to die poor and unrecognized<br/>
                                Something anyone can spare<br/>
                            </h2>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

class ContributorHappier extends Component {
    render() {
        return (
            <div className="tile is-parent is-4">
                <article className="tile is-child notification is-success has-text-left stat-tile">
                    <p className="title">
                        <span className="fa fa-smile-o"/>
                    </p>
                    <p className="subtitle is-3">Be happier</p>
                    <p className="subtitle is-5">
                        Gratitude scientifically proven to make people healthier and happier in their daily lives.<br/>
                    </p>
                </article>
            </div>
        )
    }
}

class ContributorStandFor extends Component {
    render() {
        return (
            <div className="tile is-parent is-4">
                <article className="tile is-child notification is-success has-text-left stat-tile">
                    <p className="title">
                        <span className="fa fa-paint-brush"/>
                    </p>
                    <p className="subtitle is-3">Give freedom</p>
                    <p className="subtitle is-5">
                        Art is a social good, it affects our heart and heals our souls.<br/>
                        We are the people, who this art is made for, we need it in our lives, more then we need things.
                        We can not only take, but we also can give back to the artist a small token of our gratitude.
                    </p>
                </article>
            </div>
        )
    }
}

class ContributorNotMuch extends Component {
    render() {
        return (
            <div className="tile is-parent is-4">
                <article className="tile is-child notification is-success has-text-left stat-tile">
                    <p className="title">
                        <span className="fa fa-balance-scale"/>
                    </p>
                    <p className="subtitle is-3">It does not take much</p>
                    <p className="subtitle is-5">
                        You can afford it.<br/>
                        The connection that you get to the artist is so much more. Try it, feel it, embrace it.
                    </p>
                </article>
            </div>
        )
    }
}

class ContributorPoints extends Component {
    render() {
        return (
            <div className="tile is-ancestor">
                <ContributorStandFor/>
                <ContributorNotMuch/>
                <ContributorHappier/>
            </div>
        )
    }
}


export default class Contributor extends Component {
    render() {
        return (
            <div>
                <ComponentWrap>
                    <ContributorHero/>
                </ComponentWrap>
                <ComponentWrap>
                    <ContributorPoints/>
                </ComponentWrap>
            </div>
        );
    }
}