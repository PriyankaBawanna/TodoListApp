import React from "react";
const Input = ({ onChange, placeholder, type, name }) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
      />
    </>
  );
};
export default Input;
