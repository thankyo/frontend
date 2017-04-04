import React, {Component} from "react";
import Brand from "../Brand";
import FacebookLogin from "../FacebookLogin";

export default class Hero extends Component {
    render() {
        return (
            <section className="hero is-primary is-large header-image main-image">
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
                            Love.It
                        </h1>
                        <h2 className="subtitle is-3">
                            Support the art
                        </h2>
                        <FacebookLogin/>
                    </div>
                </div>
            </section>
        );
    }
}