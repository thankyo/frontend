import React from "react";
import PropTypes from "prop-types";

export function LoadingButton({ submitting, children, className = "is-info is-outlined is-inverted" }) {
  return (
    <p className="control">
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