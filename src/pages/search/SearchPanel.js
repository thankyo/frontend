import React from "react";
import { customInput, SubmitButton } from "components/form";
import { connect } from 'react-redux';
import { Field, Form, reduxForm } from "redux-form";
import { SearchIcon } from "components/Icon";
import { withRouter } from 'react-router-dom'

const SearchSubmitButton = ({ submitting }) => (
  <SubmitButton submitting={submitting}>
    <SearchIcon>Search</SearchIcon>
  </SubmitButton>
);

function SearchPanel({ handleSubmit, submitting }) {
  return (
    <Form onSubmit={handleSubmit}>
      <Field
        name="tags"
        type="text"
        component={customInput}
        placeholder="Search"
        autocomplete={false}
        addon={<SearchSubmitButton submitting={submitting}/>}
      />
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