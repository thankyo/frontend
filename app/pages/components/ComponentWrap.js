import React, {Component} from "react";

export default class ComponentWrap extends Component {
    render() {
        return (
            <section className="section container">
                {this.props.children}
            </section>
        )
    }
}