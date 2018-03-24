import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Redirect, Route, Switch } from 'react-router-dom';

const ForSupporter = () => (
  <div className="column is-4">
    <h5 className="is-size-5">For supporters</h5>
    <br/>
    <Link to="/" className="page-links">Why</Link>
  </div>
);

const ForCreator = () => (
  <div className="column is-4">
    <h5 className="is-size-5">For creators</h5>
    <br/>
    <Link to="/landing/creator" className="page-links">Why</Link>
  </div>
);

const Legal = () => (
  <div className="column is-4">
    <h5 className="is-size-5 is-white">Legal</h5>
    <br/>
    <Link to="/legal/terms" className="page-links">Terms of Use</Link>
    <br/>
    <Link to="/legal/privacy" className="page-links">Privacy Policy</Link>
  </div>
);


export default class Footer extends Component {
  render() {
    return (
      <footer className="footer page-footer">
        <div className="container">
          <div className="columns">
            <Legal/>
            <Switch>
              <Route path="/landing">
                <ForSupporter/>
              </Route>
              <Route path="/legal">
                <Fragment>
                  <ForSupporter/>
                  <ForCreator/>
                </Fragment>
              </Route>
              <Route path="/">
                <ForCreator/>
              </Route>
            </Switch>
          </div>
        </div>
      </footer>
    );
  };
};