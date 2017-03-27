import React, {Component} from "react";
import Brand from "../Brand";
import FacebookLogin from "../FacebookLogin";

export default class Hero extends Component {
    render() {
        return (
            <section className="hero is-primary is-large header-image">
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
                        <h1 className="title is-2">
                            Love it
                        </h1>
                        <h2 className="subtitle is-5">
                            Give your love
                        </h2>
                        <FacebookLogin/>
                    </div>
                </div>
            </section>
        );
    }
}