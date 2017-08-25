import React, { Component } from "react";
import { fetch } from "../../reducers/user.actions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

function CardProfile({ firstName, lastName, thumbnail }) {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={thumbnail} width={180} height={180} alt="Image"/>
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img src={thumbnail} width={48} height={48} alt="Image"/>
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">{firstName} {lastName}</p>
          </div>
        </div>
      </div>
    </div>);
}

function ImageProfile({ thumbnail }) {
  return (
    <div className="message is-info">
      <div className="message-body">
        <div className="image is-128x128 sui-avatar">
          <figure className="image is-1by1 is-small">
            <img src={thumbnail} width={100} height={100} className="is-centered"/>
          </figure>
        </div>
      </div>
    </div>
  )
}

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
    return ImageProfile(user);
  }

  render() {
    let { user, fetchUser } = this.props;
    if (user === undefined) {
      fetchUser();
      return this.loadingState();
    } else {
      return this.profileState(user)
    }
  }
}

Profile.propTypes = {
  id: PropTypes.string.isRequired,
  user: PropTypes.object
};

const mapStateToProps = (state, { id }) => {
  let user = state.user[id];
  return { user };
};

const mapDispatchToProps = (dispatch, { id }) => {
  return {
    fetchUser: () => dispatch(fetch(id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile)