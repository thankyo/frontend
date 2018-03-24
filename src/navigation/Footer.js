import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer is-primary">
        <div className="container">
          <div className="columns">
            <div className="column is-4">
              <h5 className="title is-6">Legal</h5>
              <Link to="/legal/terms">Terms of Use</Link>
              <br/>
              <Link to="/legal/privacy">Privacy Policy</Link>
            </div>
            <div className="column is-4">
              <h5 className="title is-6">For creators</h5>
              <Link to="/landing/creator">Why</Link>
            </div>
            <div className="column is-4">
              <h5 className="title is-6">For supporters</h5>
              <Link to="/">Why</Link>
            </div>
          </div>
        </div>
      </footer>
    );
  };
};