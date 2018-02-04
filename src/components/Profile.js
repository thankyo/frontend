import React, { Component } from "react";
import { fetchUser } from "../reducers/user.actions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

function ImageProfile({ avatar, firstName, lastName }) {
  return (
    <div className="profile has-text-centered">
      <div className="image">
        <figure className="image is-1by1 is-small">
          <img src={avatar} width={100} height={100} className="is-centered"/>
        </figure>
      </div>
      <div className="subtitle">{firstName} {lastName}</div>
    </div>
  )
}

class Profile extends Component {

  static profileState(user) {
    return ImageProfile(user);
  }

  render() {
    let { user } = this.props;
    if (user === undefined) {
      return Profile.profileState({ firstName: "", lastName: "", bio: "loading"});
    } else {
      return Profile.profileState(user)
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