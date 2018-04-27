import React, { Component } from "react";
import { connect } from 'react-redux';

import Post from "components/Post";
import { searchByTag } from "reducers/post/post.actions";

import NoResults from "./NoResults";
import spinnerFactory from "components/spinnerFactory";
import { bindToActions } from "reducers/util/action";

const Loading = spinnerFactory(250);

class SearchDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = { isLoading: false };
  }

  search = (query) => {
    let { searchByTag } = this.props;
    this.setState({ isLoading: true });
    searchByTag(query).then(() => this.setState({ isLoading: false }));
  };

  componentDidMount() {
    this.search(this.props.query);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.query !== this.props.query) {
      this.search(nextProps.query);
    }
  }

  render() {
    const { isLoading } = this.state;
    if (isLoading) {
      return <Loading/>
    }

    const { tags, query } = this.props;
    if (query === "") {
      return <div/>
    } else if (tags.length === 0) {
      return <NoResults/>
    } else {
      return (
        <div className="columns">
          <div className="column is-one-third">
          </div>
          <div className="column is-three-third">
            <ul className="timeline">
              {tags.map((id) => <Post key={id} id={id}/>)}
            </ul>
          </div>
        </div>
      )
    }
  }
}

const mapStateToProps = ({ navigation: { query }, post: { byTag } }) => {
  return {
    query,
    tags: byTag
  };
};

export default connect(mapStateToProps, bindToActions({ searchByTag }))(SearchDashboard);