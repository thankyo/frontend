import React from "react";

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