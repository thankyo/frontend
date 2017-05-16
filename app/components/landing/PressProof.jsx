import React, {Component} from "react";

class Proof extends Component {
    render() {
        let nativeLink = `/images/landing/${this.props.text}.jpg`;
        return (
            <div className="column">
                <div className="image is-1by1 sui-avatar">
                    <img src={nativeLink} alt={this.props.text}/>
                </div>
            </div>
        )
    }
}


export default class ContributorPressProof extends Component {
    render() {
        let style = {
            fontFamily: ['Amatic SC', 'cursive']
        };
        return (
            <section className="hero">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="columns">
                            <div className="column">
                            </div>
                            <div className="column is-2 is-primary">
                                <Proof text="NYT"/>
                            </div>
                            <div className="column is-2">
                                <Proof text="Mashable"/>
                            </div>
                            <div className="column is-2">
                                <Proof text="Tech Crunch"/>
                            </div>
                            <div className="column">
                            </div>
                        </div>
                        <div className="title is-2" style={style}>Have no idea we exist (YET)</div>
                    </div>
                </div>
            </section>
        )
    }
}