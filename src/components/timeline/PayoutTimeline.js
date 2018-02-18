import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Resource from "components/Resource";
import { asPlural, expandableComponent, mergePayouts } from "components/timeline/util";

function ProjectDayPayoutCollapsed({ project: { user, title, avatar, _id }, resources, total, handleExpand }) {
  return (
    <li className="timeline-item is-primary">
      <div className="timeline-marker is-primary is-image is-32x32">
        <Link to={`/creator/${user}/project/${_id}`}><img src={avatar} width={32} height={32}/></Link>
      </div>
      <div className="timeline-content">
        <p className="heading"><a onClick={handleExpand}>{title}</a></p>
        <p>{total} {asPlural("contribution", total)}</p>
      </div>
    </li>
  );
}

function ProjectDayPayoutExpanded({ project: { user, title, avatar, _id }, resources, total, handleExpand }) {
  return (
    <Fragment>
      <li className="timeline-item is-primary">
        <div className="timeline-marker is-primary is-image is-32x32">
          <Link to={`/creator/${user}/project/${_id}`}><img src={avatar} width={32} height={32}/></Link>
        </div>
        <div className="timeline-content" onClick={handleExpand}>
          <a className="heading">{total} {asPlural("contribution", total)}</a>
        </div>
      </li>
      <li className="timeline-header is-primary">
        <a><span className="tag is-primary" onClick={handleExpand}>{title}</span></a>
      </li>
      <li className="timeline-item is-primary">
        <div className="timeline-content">
          {resources.map(({ resource, total }, i) => <p key={i}><Resource resource={resource}/> - {total}</p>)}
        </div>
      </li>
    </Fragment>
  );
}

const ProjectDayPayout = expandableComponent(ProjectDayPayoutExpanded, ProjectDayPayoutCollapsed);

function DayPayoutExpanded({ dateStr, projects, handleExpand }) {
  return (
    <Fragment>
      <li className="timeline-header is-primary">
        <a><span className="tag is-primary" onClick={handleExpand}>{dateStr}</span></a>
      </li>
      {projects.map((project, i) => <ProjectDayPayout key={i} {...project}/>)}
    </Fragment>
  )
}

function DayPayoutCollapsed({ dateStr, projects, total, handleExpand }) {
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

const DayPayout = expandableComponent(DayPayoutExpanded, DayPayoutCollapsed);

const PayoutTimeline = ({ transactions }) => {
  return (
    <ul className="timeline">
      {mergePayouts(transactions).map((transaction, i) => <DayPayout key={i} {...transaction}/>)}
    </ul>
  );
};

export default PayoutTimeline