import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';

import Post from "components/Post";
import { searchByTag } from "reducers/post/post.actions";

import NoResults from "./NoResults";
import spinnerFactory from "components/spinnerFactory";

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

  componentWillMount() {
    this.search(this.props.query);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.query !== this.props.query) {
      this.search(nextProps.query);
    }
  }

  render() {
    const { isLoading } = this.state;
    if (isLoading ) {
      return <Loading/>
    }

    const { tags, query } = this.props;
    if (query === "") {
      return <div/>
    } else if (tags.length === 0) {
      return <NoResults/>
    } else {
      return (
        <div className="tile is-ancestor">
          <div className="tile is-vertical is-4">
            <div className="tile">
              <div className="tile is-parent is-vertical">
                {tags.map((id, i) => i % 3 === 0 && <Post key={i} id={id}/>)}
              </div>
            </div>
          </div>
          <div className="tile is-vertical is-4">
            <div className="tile">
              <div className="tile is-parent is-vertical">
                {tags.map((id, i) => i % 3 === 1 && <Post key={i} id={id}/>)}
              </div>
            </div>
          </div>
          <div className="tile is-vertical is-4">
            <div className="tile">
              <div className="tile is-parent is-vertical">
                {tags.map((id, i) => i % 3 === 2 && <Post key={i} id={id}/>)}
              </div>
            </div>
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

const mapDispatchToProps = (dispatch) => bindActionCreators({ searchByTag }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchDashboard);