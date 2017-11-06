import React from "react";

export default function Card({ isMissing, brand, last4 }) {
  if (isMissing) {
    return (
      <div className="subtitle">
        <span className="fa-stack fa-lg has-text-danger">
          <i className="fa fa-circle fa-stack-2x"/>
          <i className="fa fa-credit-card fa-stack-1x fa-inverse"/>
        </span>
        <span>Here can be your card</span>
      </div>
    )
  }
  return (
    <div className="subtitle">
        <span className="fa-stack fa-lg has-text-primary">
          <i className="fa fa-circle fa-stack-2x is-primary"/>
          <i className={`fa fa-cc-${brand.toLowerCase()} fa-stack-1x fa-inverse`}/>
        </span>
      <span>Card ending in {last4}</span>
    </div>
  )
}