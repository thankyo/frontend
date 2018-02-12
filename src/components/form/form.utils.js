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
      <p className={`${isCentered && "has-text-centered"}`}>
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

export const renderField = (props) => {
  let { meta: { touched, error } } = props;
  return (
    <div className="field">
      <div className="control">
        {flatField(props)}
      </div>
      {touched && error && <p className="help is-white">{error}</p>}
    </div>
  )
};

export const fieldWithLabel = (props) => {
  let { meta: { touched, error }, placeholder } = props;
  return (
    <div className="field">
      <label className="label">{placeholder}</label>
      <div className="control">
        {flatField(props)}
      </div>
      {touched && error && <p className="help is-white">{error}</p>}
    </div>
  )
};

export const flatField = ({
  input,
  className,
  placeholder,
  type,
  label,
  submitting,
  disabled,
  meta: { touched, error }
}) => {
  let inputClassName = error && touched ? `${className} is-danger` : className;
  if (submitting) {
    inputClassName = `${inputClassName} is-loading`;
  }

  if (type === "image") {
    return [
      <input key={0} {...input} type="text" className={inputClassName} placeholder={placeholder} disabled={disabled}/>,
      <img key={1} src={input.value}/>,
    ];
  } else if (type === "textarea") {
    return <textarea {...input} type={type} className={inputClassName} placeholder={placeholder} disabled={disabled}/>
  } else {
    if (label) {
      return [
        <label key={1}>{label}</label>,
        <input key={0} {...input} type={type} className={inputClassName} placeholder={placeholder} disabled={disabled}/>,
      ]
    } else {
      return <input {...input} type={type} className={inputClassName} placeholder={placeholder} disabled={disabled}/>
    }
  }
};