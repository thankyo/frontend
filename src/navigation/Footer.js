import React, { Component, Fragment } from "react";
import { Link, Route, Switch } from "react-router-dom";
import { GitHubIcon } from "components/Icon";

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
            <div className="columns">
              <div className="column is-9">
                <div className="field has-addons">
                  <div className="control">
                    <a href="https://github.com/thankyo" className="button is-inverted is-outlined is-primary is-small">
                      <GitHubIcon>Made on GitHub</GitHubIcon>
                    </a>
                  </div>
                  <div className="control">
                    <a href="https://bulma.io/made-with-bulma/"
                       className="button is-inverted is-outlined is-primary is-small">
                      Made with Bulma
                    </a>
                  </div>
                </div>
              </div>
              <div className="column is-3">
                <div className="control is-pulled-left">
                  <Link to="/about" className="button is-inverted is-outlined is-primary is-small">
                    About
                  </Link>
                </div>
              </div>
            </div>
            <div>
              Icons made by&nbsp;
                <a className="page-links" href="https://fontawesome.com">
                  FontAwesome
                </a>
                &nbsp;&&nbsp;
                <a className="page-links" href="http://www.freepik.com" title="Freepik">
                  Freepik
                </a>,&nbsp;
                <a className="page-links" href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">
                  Pixel perfect
                </a>,&nbsp;
                <a className="page-links" href="https://www.flaticon.com/authors/eucalyp" title="Eucalyp">
                  Eucalyp
                </a>,&nbsp;
                <a className="page-links" href="https://www.flaticon.com/authors/skyclick" title="Skyclick">
                  Skyclick
                </a>
                &nbsp;from <a href="https://www.flaticon.com/" title="Flaticon" className="page-links">flaticon</a>
            </div>
            <div>
              Photo by&nbsp;
              <a className="page-links" href="https://unsplash.com/@anniespratt?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Annie Spratt">
                Annie Spratt
              </a>,&nbsp;
              <a className="page-links" href="https://unsplash.com/@nate_dumlao?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Nathan Dumlao">
                Nathan Dumlao
              </a>,&nbsp;
              <a className="page-links" href="https://unsplash.com/@mhdr_m?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Mahdiar Mahmoodi">
                Mahdiar Mahmoodi
              </a>
              &nbsp;on <a className="page-links" href="https://unsplash.com">Unsplash</a>
            </div>
        </div>
      </footer>
    );
  };
};