import React, { Fragment } from "react";
import DateInput from "components/form/DateInput";
import cx from "classnames";

const FieldHelp = ({ meta: { touched, error, active }, help }) => {
  if (error && touched) {
    return (<p className="help is-danger">{error}</p>)
  } else if (help) {
    return (<p className="help">{help}</p>)
  } else {
    return null;
  }
};

const labelClassName = ({ isSmall, meta: { error } }) => cx(
  "label",
  {
    "is-small": isSmall,
    "is-danger": error
  }
);

const inputClassName = ({ isSmall, meta: { error, touched }, className, type }) => cx(
  className,
  "input",
  {
    "is-small": isSmall,
    "is-danger": error && touched,
    "textaream": type === "textarea"
  }
);

const fieldClassName = ({ addon }) => cx(
  "field",
  {
    "has-addons flex-1": addon,
  }
);

const controlClassName = ({ addon }) => cx("control", { "flex-1": addon });

const inputField = (props) => {
  let {
    input,
    placeholder,
    type = "text",
  } = props;

  if (type === "date") {
    return <DateInput {...props}/>
  } else if (type === "image") {
    return (
      <Fragment>
        <input
          {...input}
          type="text"
          className={inputClassName(props)}
          placeholder={placeholder}
        />
        <img src={input.value}/>
      </Fragment>
    );
  } else if (type === "textarea") {
    return (
      <textarea
        {...input}
        className={inputClassName(props)}
        placeholder={placeholder}
        rows={3}
      />
    )
  } else {
    return (
      <input
        {...input}
        type={type}
        className={inputClassName(props)}
        placeholder={placeholder}
      />
    );
  }
};

export const customInput = (props) => {
  let { meta, help, label, addon } = props;
  return (
    <Fragment>
      <div className={fieldClassName(props)}>
        {label ? <label className={labelClassName(props)}>{label}</label> : null}
        <div className={controlClassName(props)}>
          {inputField(props)}
        </div>
        {addon ? <div className="control">{addon}</div> : <FieldHelp help={help} meta={meta}/>}
      </div>
      {addon && <FieldHelp help={help} meta={meta}/>}
    </Fragment>
  )
};