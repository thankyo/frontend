import React from "react";
import { flatField } from "components/form/form.utils";
import { connect } from 'react-redux';
import { Field, Form, reduxForm } from "redux-form";
import { SearchIcon } from "components/Icon";
import { withRouter } from 'react-router-dom'

function SearchPanel({ handleSubmit, submitting }) {
  return (
    <Form className="is-fullwidth" onSubmit={handleSubmit} style={{ width: "100%" }}>
      <div className="field has-addons" style={{ flexGrow: 1 }}>
        <p className="control" style={{ flexGrow: 1 }}>
          <Field name="tags" component={flatField} placeholder="Search" autocomplete={false}/>
        </p>
        <p className="control">
          <button type="submit" className={`button is-primary ${submitting ? "is-loading" : ""}`}>
            <div className="is-hidden-mobile">
              <SearchIcon>Search</SearchIcon>
            </div>
            <div className="is-mobile is-hidden-tablet is-hidden-desktop">
              <SearchIcon/>
            </div>
          </button>
        </p>
      </div>
    </Form>
  )
}

const mapStateToProps = ({ navigation: { query } }) => {
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


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: "search",
  enableReinitialize: true
})(SearchPanel)));