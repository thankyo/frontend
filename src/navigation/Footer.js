import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer page-footer">
        <div className="container">
          <div className="content is-pulled-left">
            <Link className="is-inverted is-outlined is-primary page-links" to="/legal/terms">Terms of Use</Link>
            &nbsp;
            <Link className="is-inverted is-outlined is-primary page-links" to="/legal/privacy">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    );
  };
};