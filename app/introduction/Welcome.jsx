import React, {Component} from "react";

export default class Welcome extends Component {
    render() {
        let {firstName, thumbnail} = this.props.user;
        return (
            <section className="hero is-medium ">
                <div className="hero-body">
                    <div className="columns has-text-centered">
                        <div className="column is-3">
                        </div>
                        <div className="column is-6">
                            <h1 className="title is-1 hand-written">Welcome {firstName}!</h1>
                            <div className="sui-avatar">
                                <img src={thumbnail} alt={this.props.text} width={180} height={180}/>
                            </div>
                            <br/>
                            <h2 className="title is-2 hand-written">We are glad to have you</h2>
                        </div>
                        <div className="column is-3">
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}