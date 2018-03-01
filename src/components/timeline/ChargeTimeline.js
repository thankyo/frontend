import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Resource from "components/Resource";
import { asPlural, expandableComponent, mergeCharges } from "./util";

function ProjectDayChargeCollapsed({ project: { user, title, avatar, _id }, urls, handleExpand }) {
  return (
    <li className="timeline-item is-primary">
      <div className="timeline-marker is-primary is-image is-32x32">
        <Link to={`/creator/${user}/project/${_id}`}><img src={avatar} width={32} height={32}/></Link>
      </div>
      <div className="timeline-content">
        <p className="heading"><a onClick={handleExpand}>{title}</a></p>
        <p>{urls.length} {asPlural("contribution", urls.length)}</p>
      </div>
    </li>
  );
}

function ProjectDayChargeExpanded({ project: { user, title, avatar, _id }, urls, handleExpand }) {
  return (
    <Fragment>
      <li className="timeline-item is-primary">
        <div className="timeline-marker is-primary is-image is-32x32">
          <Link to={`/creator/${user}/project/${_id}`}><img src={avatar} width={32} height={32}/></Link>
        </div>
        <div className="timeline-content" onClick={handleExpand}>
          <a className="heading">{urls.length} {asPlural("contribution", urls.length)}</a>
        </div>
      </li>
      <li className="timeline-header is-primary">
        <a><span className="tag is-primary" onClick={handleExpand}>{title}</span></a>
      </li>
      <li className="timeline-item is-primary">
        <div className="timeline-content">
          {urls.map((url, i) => <p key={i}><Resource url={url}/></p>)}
        </div>
      </li>
    </Fragment>
  );
}

const ProjectDayCharge = expandableComponent(ProjectDayChargeExpanded, ProjectDayChargeCollapsed);

function DayChargeExpanded({ dateStr, projects, handleExpand }) {
  return (
    <Fragment>
      <li className="timeline-header is-primary">
        <a><span className="tag is-primary" onClick={handleExpand}>{dateStr}</span></a>
      </li>
      {projects.map((project, i) => <ProjectDayCharge key={i} {...project}/>)}
    </Fragment>
  )
}

function DayChargeCollapsed({ dateStr, projects, total, handleExpand }) {
  return (
    <li className="timeline-item is-primary">
      <div className="timeline-marker is-medium is-primary"/>
      <div className="timeline-content">
        <p className="heading">
          <a onClick={handleExpand}>{dateStr}</a>
        </p>
        <p>{total} contributions - in {projects.length} {asPlural("project", projects.length)}</p>
      </div>
    </li>
  );
}

const DayCharge = expandableComponent(DayChargeExpanded, DayChargeCollapsed);

export default ({ transactions }) => {
  return (
    <ul className="timeline">
      {mergeCharges(transactions).map((transaction, i) => <DayCharge key={i} {...transaction}/>)}
    </ul>
  );
};