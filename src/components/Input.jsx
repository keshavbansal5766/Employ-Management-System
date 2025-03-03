import React from "react";

function Input({ isRequired, type = "", placeholder = "" }) {
  return (
    <input
      required={isRequired}
      className="border-2 font-medium outline-none bg-transparent border-emerald-600 text-lg py-2 px-6 rounded-full placeholder:text-gray-400"
      type={type}
      placeholder={placeholder}
    />
  );
}

export default Input;
