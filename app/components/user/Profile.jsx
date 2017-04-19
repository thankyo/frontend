import React, {Component} from "react";
import {fetch} from "../../reducers/user.actions";
import PropTypes from "prop-types";
import {connect} from "react-redux";

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
            <div className="tile is-ancestor">
                <div className="tile is-parent is-8">
                    <article className="tile is-child notification is-warning has-text-centered stat-tile">
                        <p className="title">{user.firstName} {user.lastName}</p>
                        <p className="subtitle">{user.bio}</p>
                    </article>
                </div>
                <div className="tile is-parent is-loading is-2">
                    <article className="tile is-child notification is-primary has-text-centered stat-tile">
                        <p className="title">{user.balance}</p>
                        <p className="subtitle">balance</p>
                    </article>
                </div>
                <div className="tile is-parent is-2">
                    <article className="tile is-child notification is-primary has-text-centered stat-tile">
                        <p className="title">{user.total}</p>
                        <p className="subtitle">total</p>
                    </article>
                </div>
            </div>
        )
    }

    render() {
        if (this.props.user === undefined) {
            this.props.fetchUser();
            return this.loadingState();
        } else {
            return this.profileState(this.props.user)
        }
    }
}

Profile.propTypes = {
    id: PropTypes.string.isRequired,
    user: PropTypes.object
};

const mapStateToProps = (state, {id}) => {
    let user = state.user[id];
    return {user};
};

const mapDispatchToProps = (dispatch, {id}) => {
    return {
        fetchUser: () => dispatch(fetch(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile)