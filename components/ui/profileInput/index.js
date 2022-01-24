import React from "react";

const Input = ({
  innerLabel,
  wrapperClass,
  labelText,
  children,
  id,
  required,
  clicked,
  labelClass,
  ...props
}) => {
  return (
    <>
      {innerLabel && (
        <div className={`input-wrapper ${wrapperClass ? wrapperClass : ""}`}>
          <input {...props} id={id} required={required} />
          <label htmlFor={id} onClick={clicked}>
            {children}
          </label>
        </div>
      )}

      {!innerLabel && (
        <div className='profile-input-wrapper'>
          {labelText && <label htmlFor={id}>{labelText}</label>}
          <input {...props} id={id} required={required} />
        </div>
      )}
    </>
  );
};

export default Input;
