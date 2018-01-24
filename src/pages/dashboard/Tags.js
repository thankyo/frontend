import React from "react";
import { connect } from "react-redux";
import { Field, Form, reduxForm } from "redux-form";
import { fetchUserTags } from "../../reducers/tag.actions";
import { IconWithText } from "../../common/Icon";
import { renderField, required } from "../../common/form.utils";

const Tags = ({ tags = [] }) => {
  return (
    <div>
      <h1 className="subtitle">Tags</h1>
      <Form onSubmit={() => console.log("Adding new tag")}>
        <div className="field has-addons">
          <div className="control is-expanded">
            <Field name="tag" component={renderField} validate={[required]} type="text" className="input is-small" placeholder="Tag"/>
          </div>
          <p className="control">
            <button className="button is-small" type="submit">
              <IconWithText className="fa fa-plus-circle" text="Add"/>
            </button>
          </p>
        </div>
      </Form>
      <div className="tags">
        {tags.map((tag, i) => <span key={i} className="tag">{tag}</span>)}
      </div>
      <div className="has-text-centered">
        <button className="button is-primary">Save</button>
      </div>
      <br/>
      <br/>
    </div>
  );
};

const mapStateToProps = ({ thank: { supported } }) => {
  supported = supported ? supported : [];
  return {
    supported
  };
};

const mapDispatchToProps = (dispatch, { id }) => {
  dispatch(fetchUserTags(id));
  return {}
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxForm({ form: "tag" })(Tags));