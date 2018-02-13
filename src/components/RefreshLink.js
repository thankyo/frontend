import React, { Component } from "react";
import { LoadingButton } from "components/form/form.utils";

export default class RefreshLink extends Component {
  constructor(props) {
    super(props);

    this.state = { submitting: false };
  }

  handleClick = () => {
    this.setState({ submitting: true });
    this.props
      .onClick()
      .then(() => this.setState({ submitting: false }))
      .catch(() => this.setState({ submitting: false }))
  };

  render(){
    return(
      <div onClick={this.handleClick} className="is-pulled-right">
        <p className="control">
          <a className={`button ${this.props.className || ""} ${this.state.submitting && "is-loading"}`}>
            {this.props.children}
          </a>
        </p>
      </div>
    )
  }

}