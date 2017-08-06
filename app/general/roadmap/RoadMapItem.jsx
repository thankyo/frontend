import React, {Component} from "react";

class RoadMapItem extends Component {
    render() {
        return (
            <section className="section">
                <div className="container">
                    <h1 className="title is-5 is-pulled-right">{this.props.date}</h1>
                    <h1 className="title">{this.props.title}</h1>
                    <h2 className="subtitle">
                        {this.props.subtitle}
                    </h2>
                    <div className="content">
                        {this.props.children}
                    </div>
                </div>
            </section>
        );
    }
}

export default class RoadMapItems extends Component {
    render() {
        return (
            <div>
                <section className="section">
                    <div className="container">
                        <h1 className="title">2017</h1>
                        <hr/>
                        <RoadMapItem
                            date="September"
                            title="Open creator registration to wide community"
                            subtitle="Automate registration process for creators all around the world">
                            Making creator registration process automatic, with support of majority leading integration
                            platforms.
                        </RoadMapItem>
                        <RoadMapItem
                            date="December"
                            title="Open API for integration"
                            subtitle="Making data available for integration to allow crazy new awesome thing to appear">
                            Open to the developer world to remove constraints of our imagination and make a next step.
                        </RoadMapItem>
                    </div>
                </section>
                <section className="section">
                    <div className="container">
                        <h1 className="title">2018</h1>
                        <hr/>
                        <RoadMapItem
                            date="February"
                            title="Explore most loved content"
                            subtitle="Discover most loved content on the web">
                            Support new artists, to get discovered by the community.
                        </RoadMapItem>
                        <RoadMapItem
                            date="April"
                            title="A/B testing of LoveIt button location"
                            subtitle="Experiment with the LoveIt button location, to be most effective">
                            A/B testing to improve button performance, with defining best practices
                        </RoadMapItem>
                        <RoadMapItem
                            date="June"
                            title="Fan data export"
                            subtitle="Add ability to export fan base (with fan consent) to external form">
                            Creator direct dialog with his audience should not stop and must be controlled by the
                            creator.
                        </RoadMapItem>
                        <RoadMapItem
                            date="August"
                            title="Private share"
                            subtitle="Content that only supporters can see">
                            Support for private content share between creator and customers
                        </RoadMapItem>
                        <RoadMapItem
                            date="October"
                            title="Personalize button and landing page"
                            subtitle="Ability to configure button and landing page, by creator, to make them more appealing">
                            Personalization of the message will help better transcend the goals and the message of
                            creator.
                        </RoadMapItem>
                    </div>
                </section>
            </div>
        )
    }
}

