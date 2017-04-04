import React, {Component} from "react";

export default class Contributor extends Component {
    render() {
        return (
            <section className="hero">
                <div className="has-text-centered">
                    <div className="columns is-vcentered">
                        <div className="column ">
                            <img src="/images/contributor.jpg"></img>
                        </div>
                        <div className="column">
                            <h1 className="title is-2">
                                Giver
                            </h1>
                            <h2 className="subtitle is-5">
                                Great artist does not need to die poor and unrecognized<br/>
                                Something anyone can spare<br/>
                            </h2>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}