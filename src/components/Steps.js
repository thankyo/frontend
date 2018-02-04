import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "./Icon";

function StepLink({ complete, title, pathname }) {
  let active = location.pathname === pathname;
  let icon = complete ? "fa fa-check" : active ? "fa fa-circle-o" : "none";
  let element = complete ? "is-completed is-hidden-mobile" : active ? "is-active" : "is-active is-hidden-mobile";
  return (
    <div className={`step-item ${element} is-primary`}>
      <Link to={pathname}>
        <div className="step-marker">
          <Icon className={icon}/>
        </div>
        <div className="step-details">
          <br/>
          <br/>
          <p className="step-title">{title}</p>
        </div>
      </Link>
    </div>
  );
}


export function Steps({ step, links }) {
  links = links.map((link, i) => Object.assign(link, { active: i === parseInt(step), complete: parseInt(i) < step }));
  return (
    <div className="steps has-text-centered">
      {links.map((linkConf, i) => <StepLink key={i} {...linkConf}/>)}
    </div>
  )
}


export function StepNavigation({ step, links }) {
  const stepInt = parseInt(step);
  const nextStep = stepInt + 1;
  const prevStep = stepInt - 1;

  return (
    <div>
      {prevStep >= 0 && nextStep < links.length &&
      <Link to={links[prevStep].pathname} className="button is-primary is-inverted is-outlined">
        <Icon className="fa fa-chevron-left" text="Back"/><span>Back</span>
      </Link>
      }
      &nbsp;
      {nextStep < links.length &&
      <Link to={links[nextStep].pathname} className="button is-primary is-inverted is-outlined">
        <span>Next</span><Icon className="fa fa-chevron-right"/>
      </Link>
      }
    </div>
  )
}