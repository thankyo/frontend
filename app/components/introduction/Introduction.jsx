import React, {Component} from "react";

export default class Introduction extends Component {
    render() {
        let {thumbnail} = this.props.user;
        return (
            <section className="hero is-full-desktop">
                <div className="hero-body">
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
                    <div className="container has-text-centered">
                        <div className="columns">
                            <div className="column">
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}