import React from "react";

function Input({
  isRequired,
  type = "",
  placeholder = "",
  name = "",
  className = "",
}) {
  return (
    <>
      <input
        required={isRequired}
        className={className}
        type={type}
        placeholder={placeholder}
        name={name}
      />
    </>
  );
}

export default Input;
