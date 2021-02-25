import React from "react";
import "./Form-input.styles.scss";
const FormInput = ({ Handlesubmit, label, ...otherProps }) => (
  <div className="group">
    <input className="form-input" onChange={Handlesubmit} {...otherProps} />(
    {label ? (
      <label
        className={`${
          otherProps.value.length ? "shrink" : ""
        } form-input-label `}
      >
        {label}
      </label>
    ) : null}
  </div>
);
export default FormInput;
