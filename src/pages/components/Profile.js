import React, { Component } from "react";
import { fetchUser } from "../../reducers/user.actions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

function ImageProfile({ thumbnail, firstName, lastName, bio }) {
  return (
    <div className="message">
      <div className="message-body message-body-new-style">
        <div className="image sui-avatar">
          <figure className="image is-1by1 is-small">
            <img src={thumbnail} width={100} height={100} className="is-centered"/>
          </figure>
        </div>
        <div className="message-text">{firstName} {lastName}</div>
        <div className="message-text message-text-small">{bio}</div>
      </div>
    </div>
  )
}

class Profile extends Component {

  profileState(user) {
    return ImageProfile(user);
  }

  render() {
    let { user } = this.props;
    if (user === undefined) {
      return this.profileState({ firstName: "", lastName: "", bio: "loading"});
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
  dispatch(fetchUser(id));
  return { };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile)