import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import { getOwnedProjects, refreshMyProjects } from "reducers/project.actions";
import { IconWithText } from "components/Icon";
import Project from "components/Project";
import RefreshLink from "components/RefreshLink";

function MyProjects ({ pending, refresh }){
  return (
    <section className="section">
      <h1 className="title">My projects</h1>
      <h2 className="subtitle is-6">
        We are using <strong>Google Verification API</strong>.<br/>
        So all you need to do is <Link to="/settings/profile">link your Google</Link> account and we are good to go.
      </h2>
      <div className="columns">
        <div className="column is-6">
          <p className="title is-5">Available projects</p>
        </div>
        <div className="column is-6">
          <RefreshLink onClick={refresh}>
            <IconWithText className="fa fa-refresh">Refresh</IconWithText>
          </RefreshLink>
        </div>
      </div>
      {pending.map((id, i) => (<Project id={id} line={true} key={i}/>))}
      <h2 className="subtitle is-6">
        If you have no sites verified, please refer to <a href="https://support.google.com/webmasters/answer/35179?hl=en">Google</a>, or <a mailto="antono@lovei.tips">contact us</a>.
      </h2>
    </section>
  );
}

const mapStateToProps = ({ project: { owned }}) => ({ pending: owned });
const mapDispatchToProps = (dispatch) => {
  dispatch(getOwnedProjects());
  return {
    refresh: () => dispatch(refreshMyProjects())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyProjects);