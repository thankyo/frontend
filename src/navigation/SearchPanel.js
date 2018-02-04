import React from "react";
import { flatField, LoadingButton } from "../components/form/form.utils";
import { connect } from 'react-redux';
import { Field, Form, reduxForm } from "redux-form";
import { IconWithText } from "../components/Icon";
import { searchByTag } from "../reducers/search.actions";
import { withRouter } from 'react-router-dom'

function SearchPanel({ handleSubmit, submitting }) {
  return (
    <Form className="navbar-item is-expanded" onSubmit={handleSubmit}>
      <div className="field has-addons" style={{ flexGrow: 1 }}>
        <div className="control" style={{ flexGrow: 1 }}>
          <Field name="tags" component={flatField} submitting={submitting} type="text" className="input"
                 placeholder="Search" autocomplete={false}/>
        </div>
        <LoadingButton submitting={submitting}>
          <IconWithText className="fa fa-search" text="Search"/>
        </LoadingButton>
      </div>
    </Form>
  )
}

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    onSubmit: ({ tags }) => dispatch(searchByTag(tags)).then(() => { history.push("/search") })
  };
};


export default withRouter(connect(undefined, mapDispatchToProps)(reduxForm({ form: "search" })(SearchPanel)));