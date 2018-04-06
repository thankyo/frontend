import React, { Fragment } from "react";
import { Route, Switch } from 'react-router-dom';

import NotFound from "./NotFound";

import Footer from "./navigation/Footer";
import Navigation from "./navigation/Navigation";

import SupporterLandingPage from "./pages/landing/SupporterLandingPage";
import CreatorLandingPage from "./pages/landing/CreatorLandingPage";

import AuthRouter from './pages/auth/AuthRouter';

import LegalRouter from './pages/legal/LegalRouter';

import AboutRouter from "./pages/about/AboutRouter";

import ContributionRouter from "./pages/contribution/ContributionRouter";
import CreatorRouter from "./pages/creator/CreatorRouter";
import SettingsRouter from "./pages/settings/SettingsRouter";

import SearchRouter from "./pages/search/SearchRouter";
import ProjectRouter from "./pages/project/ProjectRouter";

const AppRouter = () => (
  <Fragment>
    <Switch>
      <Route exact path="/"/>
      <Route path="/(landing|auth)/"/>
      <Route>
        <section className="hero is-small is-primary">
          <Navigation/>
        </section>
      </Route>
    </Switch>

    <Switch>
      <Route exact path="/" component={SupporterLandingPage}/>
      <Route path="/landing/creator" component={CreatorLandingPage}/>
      <Route path="/auth" component={AuthRouter}/>

      <Route path="/about" component={AboutRouter}/>
      <Route path="/legal" component={LegalRouter}/>
      <Route path="/project" component={ProjectRouter}/>

      <Route path="/creator" component={CreatorRouter}/>
      <Route path="/contribution" component={ContributionRouter}/>
      <Route path="/settings" component={SettingsRouter}/>
      <Route path="/search" component={SearchRouter}/>

      <Route component={NotFound}/>
    </Switch>

    <Switch>
      <Route exact path="/">
        <Footer/>
      </Route>
      <Route path="/(legal|landing|about)/">
        <Footer/>
      </Route>
    </Switch>
  </Fragment>
);

export default AppRouter;