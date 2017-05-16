import React, {Component} from "react";

export default class Introduction extends Component {
    render() {
        let {firstName, thumbnail} = this.props.user;
        return (
            <section className="hero is-medium hand-written">
                <div className="hero-body">
                    <div className="columns has-text-centered">
                        <div className="column">
                            <h1 className="title is-1">Welcome {firstName}!</h1>
                        </div>
                    </div>
                    <div className="columns has-text-centered">
                        <div className="column is-5">
                        </div>
                        <div className="column is-2">
                            <div className="image is-1by1 sui-avatar">
                                <img src={thumbnail} alt={this.props.text}/>
                            </div>
                        </div>
                        <div className="column is-5">
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}