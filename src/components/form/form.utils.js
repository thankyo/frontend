import React from "react";
import PropTypes from "prop-types";

export function LoadingButton({ submitting, children, className = "is-info is-outlined is-inverted", isCentered }) {
  let controlClassName = isCentered ? `control has-text-centered` : `control`;
  let buttonClassName = submitting ? `button ${className} is-loading` : `button ${className}`;
  return (
    <p className={controlClassName}>
      <button className={buttonClassName} type="submit">
        {children}
      </button>
    </p>
  )
}

LoadingButton.propTypes = {
  submitting: PropTypes.bool.isRequired
};

export const required = value => value ? undefined : 'Required';
export const maxSize = (max) => value => value && value.length > max ? `Must be ${max} characters or less` : undefined;
export const urlFormat = value => value.indexOf(".") !== -1 ? undefined: "Check url format";
export const emailFormat = value => value.indexOf("@") !== -1 ? undefined: "Email missing @ sign, check again";

export const max27 = maxSize(27);
export const max64 = maxSize(64);
export const max54 = maxSize(54);

const FieldHelp = ({ meta: { touched, error }, help }) => {
  if (error && touched) {
    return (<div className="help is-danger">{error}</div>)
  } else {
    return <div className="help">{help}</div>
  }
};

export const renderField = (props) => (
  <div className="field">
    <div className="control">
      {flatField(props)}
    </div>
  </div>
);

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

export const smallFieldWithLabel = (props) => {
  let {placeholder, className = "" } = props;
  let flatFieldProps = Object.assign({}, props, { className: `${className} is-small` });
  return (
    <div className="field">
      <label className="label is-small">{placeholder}</label>
      <div className="control">
        {flatField(flatFieldProps)}
      </div>
    </div>
  )
};

export const flatField = ({
                            input,
                            className,
                            placeholder,
                            type = "text",
                            label,
                            disabled,
                            meta,
                            help
                          }) => {
  className += " input";
  if (meta.error && meta.touched) {
    className += " is-danger"
  }

  if (type === "image") {
    return [
      <input key={0} {...input} type="text" className={className} placeholder={placeholder} disabled={disabled}/>,
      <img key={1} src={input.value}/>,
      <FieldHelp key={2} help={help} meta={meta}/>
    ];
  } else if (type === "textarea") {
    return [
      <textarea key={0} {...input} type={type} className={className} placeholder={placeholder} disabled={disabled} rows={3}/>,
      <FieldHelp key={2} help={help} meta={meta}/>
    ]
  } else {
    if (label) {
      return [
        <label key={0}>{label}</label>,
        <input key={1} {...input} type={type} className={className} placeholder={placeholder} disabled={disabled}/>,
        <FieldHelp key={2} help={help} meta={meta}/>
      ]
    } else {
      return [
        <input key={0} {...input} type={type} className={className} placeholder={placeholder} disabled={disabled}/>,
        <FieldHelp key={2} help={help} meta={meta}/>
      ]
    }
  }
};