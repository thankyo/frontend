import React from 'react';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';

import Post from "components/Post";

import { Route, Switch } from 'react-router-dom';
import { getPost } from "reducers/post/post.actions";

function PostRouter({ getPost }) {
  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-one-quarter">
          </div>
          <div className="column is-three-quarters">
            <Switch>
              <Route path="/post/:post" render={(({ match: { params: { post } } }) => {
                getPost(post);
                return (
                  <section className="section" key={post}>
                    <ul className="timeline">
                      <Post id={post}/>
                    </ul>
                  </section>
                )
              })}/>
            </Switch>
          </div>
        </div>
      </div>
    </section>
  );
}

export default connect(undefined, (dispatch) => bindActionCreators({ getPost }, dispatch))(PostRouter)