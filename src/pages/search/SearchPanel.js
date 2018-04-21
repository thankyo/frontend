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
        <div className="control" style={{ flexGrow: 1 }}>
          <Field name="tags" component={flatField} placeholder="Search" autocomplete={false}/>
        </div>
        <div className="control">
          <button type="submit" className={`button is-primary ${submitting ? "is-loading" : ""}`}>
              <SearchIcon>Search</SearchIcon>
          </button>
        </div>
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