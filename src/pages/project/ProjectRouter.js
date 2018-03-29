import React, { Fragment} from "react";
import Project from "components/Project";
import ProjectPosts from "../creator/ProjectPosts";
import { Route, Switch } from 'react-router-dom';

const ProjectRouter = () => (
  <section className="section">
    <div className="container">
      <div className="columns">
        <div className="column is-three-quarters">
          <Switch>
            <Route path="/project/:project" render={(({ match: { params: { project } } }) => (
              <Fragment key={project}>
                <section className="section">
                  <Project id={project} />
                </section>
                <ProjectPosts id={project}/>
              </Fragment>
            ))}/>
          </Switch>
        </div>
      </div>
    </div>
  </section>
);

export default ProjectRouter;
