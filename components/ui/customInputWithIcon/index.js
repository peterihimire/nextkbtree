import React from "react";

const Input = ({
  innerLabel,
  wrapperClass,
  labelText,
  children,
  id,
  required,
  clicked,
  inputHolder,
  src,
  iconClass,
  ...props
}) => {
  return (
    <>
      {labelText && <label htmlFor={id}>{labelText}</label>}

      {innerLabel && (
        <div className={`input-wrapper ${wrapperClass ? wrapperClass : ""}`}>
          <input {...props} id={id} required={required} />
          <label htmlFor={id} onClick={clicked}>
            {children}
          </label>
        </div>
      )}

      {!innerLabel && (
        <div className={`input-holder ${inputHolder ? inputHolder : ""}`}>
          <input {...props} id={id} required={required} />
          {src ? (
            <button
              {...props}
              className={`icon-wrapper ${iconClass ? iconClass : ""}`}
            >
              <img src={src} alt='' />
            </button>
          ) : null}
        </div>
      )}
    </>
  );
};

export default Input;
