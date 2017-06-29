import React, {Component} from "react";
import Welcome from "./Welcome";

import Navigation from "components/Navigation";
import authService from "service/auth";
import Footer from "components/Footer";
import HowItWorks from "../landing/contributor/HowItWorks";
import Payment from "../landing/contributor/Payment";
import {Link} from 'react-router';
import Icon from "../components/Icon";

class WhatToStartWith extends Component {
    render() {
        return (
            <section className="hero is-narrow hand-written">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="title is-1">
                            Supporter can <Link to="my/payment">set their monthly limit</Link> and start using it right away<br/>
                            <Link to="my/payment" className="button is-large is-success is-inverted"><Icon fa="heart" text="Supporter"/></Link>
                        </div>
                        <div className="title is-1">
                            Creator - we are ready to <Link to="my/integration">integrate</Link><br/>
                            <Link to="my/integration" className="button is-large is-info is-inverted"><Icon fa="paint-brush" text="Creator"/></Link>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default class IntroductionPage extends Component {
    render() {
        let user = authService.getUserIdentity();
        return (
            <div>
                <Navigation/>
                <Welcome user={user}/>
                <HowItWorks/>
                <Payment/>
                <WhatToStartWith/>
                <Footer/>
            </div>
        );
    }
};
