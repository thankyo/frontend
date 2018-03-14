import React, { Fragment } from "react";
import { max27, max64, required, smallFieldWithLabel } from "components/form/form.utils";
import { Field, FieldArray, FormSection } from "redux-form";
import Tags from "components/form/Tags";

export default function () {
  return (
    <FormSection name="project">
      <Field
        name="avatar"
        component={smallFieldWithLabel}
        type="url"
        placeholder="Project Avatar"
        help="magnificent project avatar"
      />
      <Field
        name="title"
        component={smallFieldWithLabel}
        placeholder="Title"
        validate={[required, max27]}
        help="27 symbols of awesomeness"
      />
      <Field
        name="description"
        component={smallFieldWithLabel}
        type="textarea"
        className="textarea"
        placeholder="Description"
        validate={[required, max64]}
        help={"blow their mind"}
      />
      <Field
        name="rss"
        component={smallFieldWithLabel}
        type="url"
        placeholder="RSS"
        help="we'll be watching every post you make"
      />
      <FieldArray name="tags" component={(props) => {
        let { fields } = props;
        let tags = fields.getAll() || [];
        return (
          <div className="field">
            <label className="label is-small">Tags</label>
            <Tags tags={tags} removeTag={(tag) => {
              fields.remove(tags.indexOf(tag))
            }} addTag={({ tag }) => {
              fields.push(tag)
            }}/>
            <p className="help">that will be added to every post in this project</p>
          </div>
        )
      }}/>
    </FormSection>
  )
}