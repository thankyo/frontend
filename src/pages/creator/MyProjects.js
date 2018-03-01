import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import Resource from "components/Resource";
import { getOwnedProjects } from "reducers/project.actions";
import { InstallIcon } from "components/Icon";

function OwnedProject({ webStack, url, _id }) {
  return (
    <div className="columns">
      <div className="column">
        <Resource url={url}/><br/>
        <Link to={`/creator/my/install/${_id}`}>
          <button className="button is-primary is-outlined is-rounded">
            <InstallIcon>Install</InstallIcon>
          </button>
        </Link>
      </div>
    </div>
  )
}


function MyProjects ({ owned }){
  return (
    <section className="section">
      <h1 className="title is-5">My projects</h1>
      <h2 className="subtitle is-6">
        We are using <strong>Google Verification API</strong>.<br/>
        So all you need to do is <Link to="/settings/profile">link your Google</Link> account and we are good to go.
      </h2>
      <div className="content">
        <h2 className="title is-5">Available projects</h2>
        {owned.map((project, i) => (<OwnedProject key={i} {... project}/>))}
        <h2 className="subtitle is-6">
          If you have no sites verified, please refer to <a href="https://support.google.com/webmasters/answer/35179?hl=en">Google</a>, or <a mailto="antono@lovei.tips">contact us</a>.
        </h2>
      </div>
    </section>
  );
}

const mapStateToProps = ({ project: { owned, byId }}) => ({ owned: owned.map(id => byId[id]) });
const mapDispatchToProps = (dispatch) => {
  dispatch(getOwnedProjects());
  return {
    refresh: () => dispatch(getOwnedProjects())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyProjects);