import React, {Component} from "react";

const WEB = "Web";
const SOCIAL = "Social";
const MOBILE = "Mobile";


class HowItWorksTabs extends Component {
    render() {
        return (
            <div className="tabs is-fullwidth is-large">
                <ul>
                    <li onClick={() => this.props.setActive(WEB)}
                        className={this.props.active === WEB ? "is-active" : ""}>
                        <a>
                            <span>{WEB}</span>
                        </a>
                    </li>
                    <li onClick={() => this.props.setActive(SOCIAL)}
                        className={this.props.active === SOCIAL ? "is-active" : ""}>
                        <a>
                            <span>{SOCIAL}</span>
                        </a>
                    </li>
                    <li onClick={() => this.props.setActive(MOBILE)}
                        className={this.props.active === MOBILE ? "is-active" : ""}>
                        <a>
                            <span>{MOBILE}</span>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}

class Web extends Component {
    render() {
        return (
            <section className="hero">
                <div className="hero-body">
                    <h1 className="title is-1">I'm Web</h1>
                </div>
            </section>
        )
    }
}

class Social extends Component {
    render() {
        return (
            <section className="hero">
                <div className="hero-body">
                    <h1 className="title is-1">I'm Social</h1>
                </div>
            </section>
        )
    }
}

class Mobile extends Component {
    render() {
        return (
            <section className="hero">
                <div className="hero-body">
                    <h1 className="title is-1"> I'm kinda mobile</h1>
                </div>

            </section>
        )
    }
}

export default class HowItWorks extends Component {
    constructor() {
        super();
        this.state = {"active": "Web"};
    }

    render() {
        let content = <Mobile/>;
        switch (this.state.active) {
            case WEB:
                content = <Web/>;
                break;
            case SOCIAL:
                content = <Social/>;
                break;
            case MOBILE:
                content = <Mobile/>;
                break;
        }
        return (
            <section className="hero">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <h1 className="title is-3">
                            How this works.
                        </h1>
                        <HowItWorksTabs active={this.state.active} setActive={(active) => this.setState({active})}/>
                        <hr/>
                        { content }
                    </div>
                </div>
            </section>
        )
    }
}