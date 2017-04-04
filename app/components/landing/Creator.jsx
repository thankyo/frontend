import React, {Component} from "react";

export default class Creator extends Component {
    render() {
        return (
            <section className="hero">
                <div className="has-text-centered">
                    <div className="columns is-vcentered">
                        <div className="column">
                            <h1 className="title is-2">
                                Creator
                            </h1>
                            <h2 className="subtitle is-5">
                                Create and share your love.<br/>
                                There are always people <br/>
                                Who will hear you and understand<br/>
                            </h2>
                        </div>
                        <div className="column ">
                            <img src="/images/creator.jpg"></img>
                        </div>
                    </div>
                </div>
            </section>
        );
    };
};
