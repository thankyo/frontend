import React, { Component } from "react";
import { connect } from "react-redux";
import { addUserTag, fetchUserTags, removeUserTag, saveMyTags } from "../../reducers/tag.actions";

import Tags from "components/form/Tags";

class UserEditTag extends Component {
  componentWillMount() {
    this.props.fetchUserTags(this.props.id);
  }
  render() {
    let { tags, addUserTag, removeUserTag } = this.props;
    return (
      <div>
        <h1 className="subtitle">Tags</h1>
        <Tags tags={tags} addTag={addUserTag} removeTag={removeUserTag}/>
        <br/>
        <br/>
      </div>
    );
  }
}

const mapStateToProps = ({ tag: { user } }, { id }) => {
  let tags = user[id] ? user[id] : [];
  return {
    tags
  };
};

const mapDispatchToProps = (dispatch, { id }) => {
  return {
    fetchUserTags: (id) => dispatch(fetchUserTags(id)),
    addUserTag: ({ tag }) => {
      if (tag != null) {
        dispatch(addUserTag(id, tag));
        dispatch(saveMyTags(id))
      }
    },
    removeUserTag: (tag) => {
      dispatch(removeUserTag(id, tag));
      dispatch(saveMyTags(id))
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserEditTag);
