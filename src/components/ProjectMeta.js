import React, { Fragment } from "react";
import { Helmet } from 'react-helmet';
import { connect } from "react-redux";

const FacebookMeta = ({ title, description, avatar }) => (
  <Fragment>
    <meta name="og:title" value={title}/>
    <meta name="og:description" value={description}/>
    <meta name="og:image" value={avatar}/>
  </Fragment>
);

const ProjectMetaView = ({ project = {} }) => (
  <Helmet>
    <meta name="og:title" content={project.title}/>
    <meta name="og:description" content={project.description}/>
    <meta name="og:image" content={project.avatar}/>

  </Helmet>
);

const mapStateToProps = ({ project: { byId }}, { id }) => ({ project: byId[id] });

const ProjectMeta = connect(mapStateToProps)(ProjectMetaView);

export default ProjectMeta;