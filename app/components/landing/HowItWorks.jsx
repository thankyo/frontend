import React, {Component} from "react";

export default class HowItWorks extends Component {
    render() {
        return (
        <section className="hero">
            <div className="has-text-centered">
                <div className="columns is-vcentered">
                    <div className="column">
                        <h1 className="title is-2">
                            How it works
                        </h1>
                        <h2 className="subtitle is-5">
                            Single tip is <strong>only 10 cent.</strong><br/>
                            Can you buy anything with this?
                        </h2>
                    </div>
                    <div className="column ">
                        <img src="/images/how.jpg"></img>
                    </div>
                </div>
            </div>
        </section>
        );
    }
};