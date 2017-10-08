import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
          <div className="container">
              <div className="content has-text-centered">
                  <div className="columns">
                      <div className="column is-3 is-hidden-mobile">
                      </div>
                      <div className="column is-2">
                          <Link to="/legal/terms">Terms of Use</Link>
                      </div>
                      <div className="column is-2">
                          <Link to="/legal/privacy">Privacy Policy</Link>
                      </div>
                      <div className="column is-2">
                          <Link to="/roadmap">Roadmap</Link>
                      </div>
                      <div className="column is-3 is-hidden-mobile">
                      </div>
                  </div>
              </div>
          </div>
      </footer>
    );
  };
};