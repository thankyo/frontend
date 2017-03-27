import React, {Component} from "react";
import {fetch} from "../reducers/user.actions";
import { connect } from "react-redux";

class Profile extends Component {
    loadingState() {
        return (
            <div className="section profile-heading is">
                <div className="columns is-loading">
                    <p className="title"> Loading ...</p>
                </div>
            </div>
        )
    }

    profileState(user) {
        return (
            <div className="section profile-heading">
                <div className="columns">
                    <div className="column is-2">
                        <div className="image is-128x128 avatar">
                            <img src={user.thumbnail}/>
                        </div>
                    </div>
                    <div className="column is-6 name">
                        <p>
                            <span className="title is-bold">{user.firstName} {user.lastName}</span>
                        </p>
                        <p className="tagline">{user.bio}</p>
                    </div>
                    <div className="column is-2 following has-text-centered">
                        <p className="stat-val">{user.total}</p>
                        <p className="stat-key">total</p>
                    </div>
                    <div className="column is-2 likes has-text-centered">
                        <p className="stat-val">{user.balance}</p>
                        <p className="stat-key">balance</p>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        if (this.props.user === undefined) {
            return this.loadingState();
        } else {
            return this.profileState(this.props.user)
        }
    }
}

Profile.propTypes = {
    id: React.PropTypes.string.isRequired,
    user: React.PropTypes.object
};

const mapStateToProps = (state, {id}) => {
    let user = state.user[id];
    return {user};
};

const mapDispatchToProps = (dispatch, {id}) => {
    dispatch(fetch(id));
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile)