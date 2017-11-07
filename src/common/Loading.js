import React, { Component } from "react";

export function loadingComponent(loader, Component) {
  class LoadingComponent extends Component {
    constructor(props) {
      super(props);

      this.state = { loading: true }
    }
    componentWillMount() {
      loader().then(() => this.setState({ loading: false }));
    }
    render() {
      if (this.state.loading) {
        return <Loading/>
      } else {
        return <Component/>
      }
    }
  }

  return LoadingComponent;
}

export default function Loading() {
  return (
    <button className="button is-loading is-outlined is-primary is-inverted"></button>
  );
}