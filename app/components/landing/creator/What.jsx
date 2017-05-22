import React, {Component} from "react";
import FacebookLogin from 'components/landing/FacebookLogin';

export default class What extends Component {
    render() {
        return (
            <section className="hero is-info">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="columns">
                            <div className="column is-3 is-hidden-mobile"></div>
                            <div className="column is-6">
                                <div className="title is-3 hand-written">What is this all about</div>
                                <div className="is-4 has-text-left">
                                    <strong className="hand-written">What is microtip and why should I care?</strong><br/>
                                    Microtip is a small 10c tip, that anyone of your users can share with you.
                                    We are going to make it as simple as possible with a <strong>LoveIt button</strong>.
                                    <br/>
                                    <br/>
                                    <strong className="hand-written">What is LoveIt button and How do I get one?</strong><br/>
                                    It's basically Facebook Like button, but with a bit more meaning. Every time user click it
                                    you get <strong>10c</strong>, which accumulated will be significant, but of course it will take time to make your user base.
                                    <br/>
                                    <br/>
                                    <strong className="hand-written">10c, really?</strong><br/>
                                    In order for it to become a habit - amount should be small enough, so that users won't be thinking too much about it.
                                    We believe this will become a <strong>healthy habit</strong>, for your users.
                                    <br/>
                                    <br/>
                                    <strong className="hand-written">What about integrations and other technical things?</strong><br/>
                                    Integration process will be a breeze, we have best people in the house, so you could fallback and relax.
                                    <br/>
                                    <br/>
                                    <strong className="hand-written">What about the fees?</strong><br/>
                                    LoveIt will take 5% flat fee, plus 3% payed to processing companies. We'll be working on minimizing this amounts in future.
                                    <br/>
                                    <br/>
                                    <FacebookLogin>
                                        <div className="has-text-centered">
                                            <div className="button is-info is-large is-outlined is-inverted">Click away</div>
                                        </div>
                                    </FacebookLogin>
                                </div>
                            </div>
                            <div className="is-4 is-hidden-mobile"></div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

