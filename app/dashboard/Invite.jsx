import React, {Component} from "react";

export default class Invite extends Component {
  render() {
    return (
      <div className="has-text-centered notification is-info">
        <h1 className="title">Who you are ready to support?</h1>
        <button className="button is-info is-inverted is-outlined is-hovered">Invite</button>
      </div>
    );
  }
}
