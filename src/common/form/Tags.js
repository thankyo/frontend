import React from "react";
import { Field, Form, reduxForm } from "redux-form";
import { IconWithText } from "../Icon";

function AddTagForm({ handleSubmit }) {
  return (
    <Form onSubmit={handleSubmit}>
      <div className="field has-addons">
        <div className="control is-expanded">
          <Field name="tag" component="input" type="text" className="input is-small" placeholder="Tag" autoComplete="off"/>
        </div>
        <p className="control">
          <button className="button is-small is-primary" type="submit">
            <IconWithText className="fa fa-plus-circle" text="Add"/>
          </button>
        </p>
      </div>
    </Form>
  );
}
AddTagForm = reduxForm({ form: "tag" })(AddTagForm);

export default function Tags({ tags, addTag, removeTag }) {
  return (
    <div>
      <div className="field is-grouped is-grouped-multiline">
        {tags.map((tag, i) => (
          <div key={i} className="control">
            <div className="tags has-addons">
              <span className="tag">{tag}</span>
              <a className="tag is-delete is-dark" onClick={() => removeTag(tag)}/>
            </div>
          </div>
        ))}
      </div>
      <br/>
      <AddTagForm onSubmit={addTag}/>
    </div>
  );
}