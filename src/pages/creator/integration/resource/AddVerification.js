import React from "react";
import { Field, reduxForm } from "redux-form";
import { IconWithText } from "../../../../common/Icon";


let AddVerification = ({ handleSubmit }) => {
  return (
    <div className="support-block has-text-centered notification">
      <form>
        <h1 className="title is-5">Before starting you need to verify resource ownership</h1>
        <h2 className="subtitle is-6">After verifying resource you can integrate it to your site</h2>
        <div className="field has-addons">
          <p className="control is-expanded has-icons-left">
            <Field name="uri" component="input" value="" className="input" placeholder="Link"/>
            <span className="icon is-small is-left"><i className="fa fa-globe"/></span>
          </p>
          <p className="control has-icon-left">
            <button className="button button-green" type="submit" onClick={handleSubmit}>
              <IconWithText className="fa fa-check" text="Verify"/>
            </button>
          </p>
        </div>
      </form>
    </div>
  )
};

AddVerification = reduxForm({
  form: 'verifyResource'
})(AddVerification);

export default AddVerification;