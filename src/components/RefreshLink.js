import React, { Component } from "react";
import { makeCancelable } from "components/util";

export default class RefreshLink extends Component {
  constructor(props) {
    super(props);

    this.state = { submitting: false };
  }

  handleClick = () => {
    this.setState({ submitting: true });
    this.clickProcess = makeCancelable(this.props.onClick());
    this.clickProcess.promise
      .then(() => this.setState({ submitting: false }))
      .catch(({ isCanceled }) => !isCanceled && this.setState({ submitting: false }))
  };

  componentWillUnmount() {
    this.clickProcess.cancel();
  }

  render(){
    return(
      <p className="control">
        <a className={`${this.props.className || "button"} ${this.state.submitting && "is-loading"}`} onClick={this.handleClick} >
          {this.props.children}
        </a>
      </p>
    )
  }

}