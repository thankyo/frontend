import React from "react";
import { flatField, LoadingButton } from "components/form/form.utils";
import { connect } from 'react-redux';
import { Field, Form, reduxForm } from "redux-form";
import { IconWithText } from "components/Icon";
import { withRouter } from 'react-router-dom'

function SearchPanel({ handleSubmit, submitting }) {
  return (
    <Form className="is-fullwidth" onSubmit={handleSubmit} style={{ width: "100%" }}>
      <div className="field has-addons" style={{ flexGrow: 1 }}>
        <div className="control" style={{ flexGrow: 1 }}>
          <Field name="tags" component={flatField} placeholder="Search" autocomplete={false}/>
        </div>
        <LoadingButton submitting={submitting}>
          <div className="is-hidden-mobile">
            <IconWithText className="fa fa-search">Search</IconWithText>
          </div>
          <div className="is-mobile is-hidden-tablet is-hidden-desktop">
            <IconWithText className="fa fa-search"/>
          </div>
        </LoadingButton>
      </div>
    </Form>
  )
}

const mapStateToProps = ({ navigation: { query }}) => {
  return {
    initialValues: {
      tags: query
    }
  }
};

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    onSubmit: ({ tags }) => history.push(`/search?query=${tags}`)
  };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(reduxForm({ form: "search", enableReinitialize: true })(SearchPanel)));