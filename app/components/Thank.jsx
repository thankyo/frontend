import React, {Component} from "react";
import {connect} from "react-redux";

const Thank = () => {
    return (
        <div className="card">
            <div className="card-content">
                <p className="control has-addons">
                    <input className="input is-expanded" type="text" placeholder="URL"/>
                    <a className="button is-info">
                        Thank
                    </a>
                </p>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    let user = state.user[id];
    return {user};
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(undefined, mapDispatchToProps)(Thank)