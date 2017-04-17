import React, {Component} from "react";

export default class ContactView extends Component {
    render() {
        return (
            <div className="container">
                <div className="tile is-ancestor">
                    <a className="tile is-parent is-4" href="mailto:antono@loveit.tips">
                        <article className="tile is-child notification is-success has-text-centered stat-tile">
                            <p className="title">
                                <span className="fa fa-send"/>
                                <span> Email</span>
                            </p>
                            <p className="subtitle">antono@loveit.tips</p>
                        </article>
                    </a>
                    <a className="tile is-parent is-4" href="skype:oparin.anton?call">
                        <article className="tile is-child notification is-success has-text-centered stat-tile">
                            <p className="title">
                                <span className="fa fa-skype"></span>
                                <span> Skype</span>
                            </p>
                            <p className="subtitle">oparin.anton</p>
                        </article>
                    </a>
                    <a className="tile is-parent is-4" href="https://calendly.com/antono">
                        <article className="tile is-child notification is-success has-text-centered stat-tile">
                            <p className="title">
                                <span className="fa fa-calendar-check-o"></span>
                                <span> Calendar</span>
                            </p>
                            <p className="subtitle">Let's talk</p>
                        </article>
                    </a>
                </div>
            </div>
        );
    }
}

class ContactButtonView extends Component {
    render() {
        return (
            <div className="is-flex has-text-centered">
                <div className="is-4 is-expanded">
                    <a className="button is-large" href="mailto:antono@loveit.tips">
                        <span className="fa fa-send"></span> Email
                    </a>
                </div>
                <div className="is-4">
                    <a className="button is-large" href="skype:oparin.anton?call">
                        <i className="icon"><span className="fa fa-skype"></span></i> Skype
                    </a>
                </div>
                <div className="is-4">
                    <a className="button is-large" href="https://calendly.com/antono">
                        <span className="fa fa-calendar"></span> Calendar
                    </a>
                </div>
            </div>
        );
    }
}