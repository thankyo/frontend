import React, { Component } from "react";
import {connect} from "react-redux";
import {authFacebook} from "../reducers/auth.actions.js";
import { Link, browserHistory } from 'react-router';

function Authenticated() {
    setTimeout(() => browserHistory.push("/supporter/my"), 1000);
    return (
        <div>
            <h1 className="title is-1">All done.</h1>
            <div className=" is-3">Please <Link to="/supporter/my" className="is-link">click here</Link> if you are not redirected within a few seconds</div>
        </div>
    )
}

class Loading extends Component {
    constructor(props) {
        super(props);

        this.state = { progress: 0 }
    }
    render() {
        let currentProgress = this.state.progress;
        if (currentProgress < 90) {
            setTimeout(() => this.setState({progress: currentProgress + 1}), 100)
        }
        return (
            <progress className="progress is-primary" value={currentProgress} max="100">{currentProgress}%</progress>
        )
    }
}

const FacebookAuthPage = ({ auth }) => {
    return (
        <div className="hero is-fullheight is-info">
            <div className="hero-body">
                <div className="container has-text-centered">
                    <h1 className="title is-2">Welcome</h1>
                    <h1 className="subtitle is-4">We are setting things up</h1>
                    <img src="/images/landing/loading.gif"/>
                    <br/>
                    <br/>
                    {auth.authenticated ? Authenticated() : <Loading/> }
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = ({auth}) => {
    return {auth};
};

const mapDispatchToProps = (dispatch) => {
    dispatch(authFacebook(window.location.search));
    return {};
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FacebookAuthPage);