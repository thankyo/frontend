import React from "react";

export function LoadingButton({ submitting, children }) {
  return (
    <p className="control">
      <button className={`button is-info is-outlined is-inverted ${submitting && "is-loading"}`} type="submit">
        {children}
      </button>
    </p>
  )
}

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
        {touched && error && <p className="help is-white">{error}</p>}
      </div>
    </div>
  )
};