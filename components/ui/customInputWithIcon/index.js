import React from "react";

const Input = ({
  innerLabel,
  wrapperClass,
  labelText,
  children,
  id,
  required,
  clicked,
  icon,
  ...props
}) => {
  return (
    <>
      {labelText && <label htmlFor={id}>{labelText}</label>}

      {innerLabel && (
        <div className={`input-wrapper ${wrapperClass ? wrapperClass : ""}`}>
          <div className="input-holder">
            <input {...props} id={id} required={required} />
            {icon && <img {...props} className={`icon-wrapper`} />}
          </div>
          <label htmlFor={id} onClick={clicked}>
            {children}
          </label>
        </div>
      )}

      {!innerLabel && <input {...props} id={id} required={required} />}
    </>
  );
};

export default Input;
