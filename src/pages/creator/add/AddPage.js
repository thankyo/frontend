import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import { addProject, getPendingProjects } from "reducers/project.actions";
import Resource from "components/Resource";
import { LoadingButton } from "components/form/form.utils";
import { Icon, IconWithText } from "components/Icon";

// TODO single loading button logic
class RefreshButton extends Component {
  constructor(props) {
    super(props);

    this.state = { submitting: false };
  }

  handleClick = () => {
    this.setState({ submitting: true });
    this.props
      .onClick()
      .then(() => this.setState({ submitting: false }))
      .catch(() => this.setState({ submitting: false }))
  };

  render(){
    return(
      <div onClick={this.handleClick} className="is-pulled-right">
        <LoadingButton submitting={this.state.submitting} className="is-primary">
          <IconWithText className="fa fa-refresh" text="Refresh"/>
        </LoadingButton>
      </div>
    )
  }

}

function AddProject ({ pending, refresh }){
  return (
    <section className="section">
      <h1 className="title">Add project</h1>
      <h2 className="subtitle is-6">
        We are using <strong>Google Verification API</strong>.<br/>
        So all you need to do is <Link to="/settings/profile">link your Google</Link> account and we are good to go.
      </h2>
      <div className="columns">
        <div className="column is-6">
          <p className="title is-5">Available projects</p>
        </div>
        <div className="column is-6">
          <RefreshButton onClick={refresh}/>
        </div>
      </div>
      {pending.map(({ resource, _id }, i) => (
        <div key={i} className="columns">
          <div className="column is-9">
            <Resource resource={resource}/>
          </div>
          <div className="column is-3">
            <div className="field">
              <input id={_id} type="checkbox" className="switch" onChange={() => {}}/>
              <label htmlFor={_id}>Enabled</label>
            </div>
          </div>
        </div>
      ))}
      <h2 className="subtitle is-6">
        If you have no sites verified, please refer to <a href="https://support.google.com/webmasters/answer/35179?hl=en">Google</a>, or contact us at <a mailto="antono@lovei.tips">antono@loveit.tips</a>
      </h2>
    </section>
  );
}

const mapStateToProps = ({ project: { pending }}) => ({ pending })
const mapDispatchToProps = (dispatch) => {
  dispatch(getPendingProjects());
  return {
    refresh: () => dispatch(getPendingProjects()),
    onSubmit: (project) => dispatch(addProject(project)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProject);