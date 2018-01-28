import React from "react";
import { flatField } from "../common/form.utils";
import { connect } from 'react-redux';
import { Field, Form, reduxForm } from "redux-form";
import { Icon } from "../common/Icon";
import { searchByTag } from "../reducers/search.actions";

function SearchPanel({ handleSubmit }) {
  return (
    <Form className="navbar-item is-expanded" onSubmit={handleSubmit}>
      <div className="field has-addons" style={{ flexGrow: 1 }}>
        <div className="control" style={{ flexGrow: 1 }}>
          <Field name="tags" component={flatField} type="text" className="input is-fullwidth" placeholder="Search" autocomplete={false}/>
        </div>
        <div className="control is-paddingless">
          <button type="submit" className='button is-outlined is-primary is-inverted'>
            <Icon className="fa fa-search"/>
          </button>
        </div>
      </div>
    </Form>
  )
}

const mapDispatchToProps = (dispatch) => ({
  onSubmit: ({ tags }) => dispatch(searchByTag(tags))
});


export default connect(undefined, mapDispatchToProps)(reduxForm({ form: "search" })(SearchPanel));