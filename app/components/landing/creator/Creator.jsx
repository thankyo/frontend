import React, {Component} from "react";
import ComponentWrap from "../../ComponentWrap";
import SocialProof from './SocialProof';


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
                <SocialProof/>
                <ComponentWrap>
                    <CreatorPoints/>
                </ComponentWrap>
            </div>
        );
    };
};
