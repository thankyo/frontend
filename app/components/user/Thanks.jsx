import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router";

class ThankItem extends Component {
    render() {
        return (
            <Link to={this.props.item.path} className={this.props.item.active ? "nav-item is-active" : "nav-item"}>
                <span>{this.props.item.text}</span>
            </Link>
        );
    }
}

const Thanks = ({ thank }) => {
    return (
        <div className="content">
            <h1>I'm Thanks</h1>
        </div>
    );
};

const mapStateToProps = ({ thanks }, { id }) => {
    let thank = thanks[id];
    return {
        thank
    };
};

export default connect(
    mapStateToProps,
    undefined
)(Thanks);