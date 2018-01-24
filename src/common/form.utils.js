import React, { Component } from "react";
import PropTypes from "prop-types";

export class PromiseButton extends Component {
  constructor(props) {
    super(props);

    this.state = { submitting: false };
  }

  handleClick = () => {
    this.setState({ submitting: true });
    this.props.onClick()
      .then(() => this.setState({ submitting: false }))
      .catch(() => this.setState({ submitting: false }));
  };

  render() {
    let { children, className = "is-info is-outlined is-inverted", isCentered } = this.props;

    return (
      <p className={`control ${isCentered && "has-text-centered"}`}>
        <a className={`button ${className} ${this.state.submitting && "is-loading"}`} type="submit" onClick={this.handleClick}>
          {children}
        </a>
      </p>
    )
  }
}

export function LoadingButton({ submitting, children, className = "is-info is-outlined is-inverted", isCentered }) {
  return (
    <p className={`control ${isCentered && "has-text-centered"}`}>
      <button className={`button ${className} ${submitting && "is-loading"}`} type="submit">
        {children}
      </button>
    </p>
  )
}

LoadingButton.propTypes = {
  submitting: PropTypes.bool.isRequired
};

export const required = value => value ? undefined : 'Required';

export const renderField = ({
                              input,
                              className,
                              placeholder,
                              type,
                              meta: { touched, error }
                            }) => {
  let inputClassName = error && touched ? `${className} is-danger` : className;
  return (
    <div className="field">
      <div className="control">
        <input {...input} type={type} className={inputClassName} placeholder={placeholder}/>
      </div>
      {touched && error && <p className="help is-white">{error}</p>}
    </div>
  )
};