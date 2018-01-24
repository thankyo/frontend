import React from "react";
import { connect } from "react-redux";
import { Field, Form, reduxForm } from "redux-form";
import { addUserTag, fetchUserTags, removeUserTag, saveMyTags } from "../../reducers/tag.actions";
import { IconWithText } from "../../common/Icon";
import { PromiseButton, renderField, required } from "../../common/form.utils";

let TagForm = ({ tags = [], handleSubmit }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <div className="field has-addons">
        <div className="control is-expanded">
          <Field name="tag" component={renderField} validate={[required]} type="text" className="input is-small"
                 placeholder="Tag"/>
        </div>
        <p className="control">
          <button className="button is-small" type="submit">
            <IconWithText className="fa fa-plus-circle" text="Add"/>
          </button>
        </p>
      </div>
    </Form>
  );
};


const mapTagFormDispatchToProps = (dispatch, { id }) => {
  return {
    onSubmit: ({ tag }) => dispatch(addUserTag(id, tag))
  }
};

TagForm = connect(
  undefined,
  mapTagFormDispatchToProps
)(reduxForm({ form: "tag" })(TagForm));


function Tags({ tags, saveUserTags, removeUserTag, id }) {
  return (
    <div>
      <h1 className="subtitle">Tags</h1>
      <TagForm id={id}/>
      <br/>
      <div className="field is-grouped is-grouped-multiline">
        {tags.map((tag, i) => (
          <div key={i} className="control">
            <div className="tags has-addons">
              <span className="tag">{tag}</span>
              <a className="tag is-delete is-dark" onClick={() => removeUserTag(tag)}/>
            </div>
          </div>
        ))}
      </div>
      <PromiseButton onClick={saveUserTags} className="is-primary" isCentered>
        <IconWithText className="fa fa-save" text="Save"/>
      </PromiseButton>
      <br/>
      <br/>
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
  return {
    saveUserTags: () => dispatch(saveMyTags(id)),
    removeUserTag: (tag) => dispatch(removeUserTag(id, tag))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tags);
