import React from "react";
import { connect } from "react-redux";
import { Field, Form, reduxForm } from "redux-form";
import { addUserTag, fetchUserTags, removeUserTag, saveMyTags } from "../../reducers/tag.actions";
import { IconWithText } from "../../common/Icon";
import { PromiseButton, renderField, required } from "../../common/form.utils";

function Tags({ tags, saveUserTags, removeUserTag, id }) {
  return (
    <div>
      <div className="tags">
        {tags.map((tag, i) => (<span key={i} className="tag">{tag}</span>))}
      </div>
    </div>
  );
}

const mapStateToProps = ({ tag: { user } }, { id }) => {
  let tags = user[id] ? user[id] : [];
  return {
    tags
  };
};

const mapDispatchToProps = (dispatch, { id }) => {
  dispatch(fetchUserTags(id));
  return {}
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tags);
