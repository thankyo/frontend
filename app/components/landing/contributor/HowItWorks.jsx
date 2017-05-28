import React, {Component} from "react";

class HowItWorksTabs extends Component {
    render() {
        return (
            <div className="tabs is-fullwidth is-large">
                <ul>
                    <li onClick={() => this.props.setActive('Web')}
                        className={this.props.active === "Web" ? "is-active" : ""}>
                        <a>
                            <span>Web</span>
                        </a>
                    </li>
                    <li onClick={() => this.props.setActive('Social')}
                        className={this.props.active === "Social" ? "is-active" : ""}>
                        <a>
                            <span>Social</span>
                        </a>
                    </li>
                    <li onClick={() => this.props.setActive('Mobile')}
                        className={this.props.active === "Mobile" ? "is-active" : ""}>
                        <a>
                            <span>Mobile</span>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default class HowItWorks extends Component {
    constructor() {
        super();
        this.state = {"active": "Web"};
    }

    render() {
        return (
            <section className="hero">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <h1 className="title is-3">
                            How this works.
                        </h1>
                        <HowItWorksTabs active={this.state.active} setActive={(active) => this.setState({active})}/>
                    </div>
                </div>
            </section>
        )
    }
}