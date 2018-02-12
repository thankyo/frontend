import React, { Component } from "react";
import { LoadingButton } from "components/form/form.utils";

export default class RefreshButton extends Component {
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
        <LoadingButton submitting={this.state.submitting} className={this.props.className || "is-primary"}>
          {this.props.children}
        </LoadingButton>
      </div>
    )
  }

}