import React, { Component } from "react";
import { fetchUser } from "../../../reducers/user.actions";
import { connect } from "react-redux";

function ImageProfile({ avatar, firstName, lastName, bio }) {
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

class ProfileSection extends Component {

  static profileState(user) {
    return ImageProfile(user);
  }

  render() {
    let { user } = this.props;
    if (user === undefined) {
      return ProfileSection.profileState({ firstName: "", lastName: "", bio: "loading"});
    } else {
      return ProfileSection.profileState(user)
    }
  }
}

const mapStateToProps = (state) => {
  let user = state.user.my;
  return { user };
};

const mapDispatchToProps = (dispatch) => {
  dispatch(fetchUser("my"));
  return { };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileSection)