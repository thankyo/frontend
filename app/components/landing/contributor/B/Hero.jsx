import React, {Component} from "react";
import Brand from "components/Brand";
import FacebookLogin from "components/landing/FacebookLogin";

export default class Hero extends Component {
    render() {
        let style = {
            backgroundImage: "url('/images/landing/contributor/B/Hero.jpg')",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        };
        return (
            <section className="hero is-large is-success" style={style}>
                <div className="hero-head">
                    <header className="nav">
                        <div className="container">
                            <div className="nav-left">
                                <Brand/>
                            </div>
                        </div>
                    </header>
                </div>
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <h1 className="title is-1">
                            Voice of the people
                        </h1>
                        <h2 className="subtitle is-3">Microtip revolution</h2>
                        <FacebookLogin>
                            <div className="button is-info is-inverted is-outlined is-hovered is-large">
                                <span>Change the world</span>
                            </div>
                        </FacebookLogin>
                    </div>
                </div>
            </section>
        );
    }
}