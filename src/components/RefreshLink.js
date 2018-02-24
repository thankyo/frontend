import React, { Component } from "react";

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
      <p className="control">
        <a className={`${this.props.className || "button"} ${this.state.submitting && "is-loading"}`} onClick={this.handleClick} >
          {this.props.children}
        </a>
      </p>
    )
  }

}