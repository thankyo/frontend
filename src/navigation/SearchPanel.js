import React from "react";
import { flatField, LoadingButton } from "../common/form.utils";
import { connect } from 'react-redux';
import { Field, Form, reduxForm } from "redux-form";
import { IconWithText } from "../common/Icon";
import { searchByTag } from "../reducers/search.actions";

function SearchPanel({ handleSubmit, submitting }) {
  return (
    <Form className="navbar-item is-expanded" onSubmit={handleSubmit}>
      <div className="field has-addons" style={{ flexGrow: 1 }}>
        <div className="control" style={{ flexGrow: 1 }}>
          <Field name="tags" component={flatField} submitting={submitting} type="text" className="input" placeholder="Search" autocomplete={false}/>
        </div>
        <LoadingButton submitting={submitting}>
          <IconWithText className="fa fa-search" text="Search"/>
        </LoadingButton>
      </div>
    </Form>
  )
}

const mapDispatchToProps = (dispatch) => ({
  onSubmit: ({ tags }) => dispatch(searchByTag(tags))
});


export default connect(undefined, mapDispatchToProps)(reduxForm({ form: "search" })(SearchPanel));