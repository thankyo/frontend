import React, {Component} from "react";
import ComponentWrap from "./ComponentWrap";
import Icon from "./Icon";

class EmailContact extends Component {
    render() {
        return (
            <a className="tile is-parent is-4" href="mailto:antono@loveit.tips">
                <article className="tile is-child notification is-success has-text-centered stat-tile">
                    <p className="title">
                        <Icon fa="send"/>
                        <span> Email</span>
                    </p>
                    <p className="subtitle">antono@loveit.tips</p>
                </article>
            </a>
        )
    }
}

class SkypeContact extends Component {
    render() {
        return (
            <a className="tile is-parent is-4" href="skype:oparin.anton?call">
                <article className="tile is-child notification is-success has-text-centered stat-tile">
                    <p className="title">
                        <Icon fa="skype"/>
                        <span> Skype</span>
                    </p>
                    <p className="subtitle">oparin.anton</p>
                </article>
            </a>
        )
    }
}

class CalendlyContact extends Component {
    render() {
        return(
            <a className="tile is-parent is-4" href="https://calendly.com/antono">
                <article className="tile is-child notification is-success has-text-centered stat-tile">
                    <p className="title">
                        <Icon fa="calendar-check-o"/>
                        <span> Calendar</span>
                    </p>
                    <p className="subtitle">Let's talk</p>
                </article>
            </a>
        )
    }
}


class AllContact extends Component {
    render() {
        return (
            <div className="tile is-ancestor">
                <EmailContact/>
                <SkypeContact/>
                <CalendlyContact/>
            </div>
        );
    }
}

class ContactHero extends Component {
    render() {
        return (
            <section className="hero is-primary header-image">
                <div className="has-text-centered">
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <h1 className="title is-1">
                                Contacts
                            </h1>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}



export default class ContactView extends Component {
    render(){
        return (
            <div>
                <ComponentWrap>
                    <ContactHero/>
                </ComponentWrap>
                <ComponentWrap>
                    <AllContact/>
                </ComponentWrap>
            </div>
        )
    }
}