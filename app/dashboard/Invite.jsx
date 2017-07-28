import React, { Component } from "react";
import Icon from "../components/Icon";

export default class Invite extends Component {
  render() {
    return (
      <div className="has-text-centered notification is-info">
        <h1 className="title">Who you are ready to support?</h1>
        <h2 className="subtitle">Put a link or email of the creator and we'll contact him</h2>
        <div className="field has-addons">
          <p className="control is-expanded has-icons-left">
            <input className="input" type="text" placeholder="link"/>
            <span className="icon is-small is-left">
              <i className="fa fa-globe"></i>
            </span>
          </p>
          <p className="control has-icon-left">
            <a className="button is-info is-inverted is-outlined is-hovered">
              <Icon fa="hand-spock-o" text="Invite"/>
            </a>
          </p>
        </div>
        {/*<button className="button is-info is-inverted is-outlined is-hovered">Invite</button>*/}
        {/*<div className="field has-addons">*/}
        {/*<div className="control has-icons-left has-icons-right">*/}
        {/*<input className="input" type="email" placeholder="Email"/>*/}
        {/*<span className="icon is-small is-left">*/}
        {/*<i className="fa fa-envelope"></i>*/}
        {/*</span>*/}
        {/*<span className="icon is-small is-right">*/}
        {/*<i className="fa fa-check"></i>*/}
        {/*</span>*/}
        {/*</div>*/}
        {/*<div className="control">*/}
        {/*<button className="button is-info">Invite</button>*/}
        {/*</div>*/}
        {/*</div>*/}
      </div>
    );
  }
}
