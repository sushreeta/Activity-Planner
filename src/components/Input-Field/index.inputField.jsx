import React, { useState, useEffect } from "react";
import "./inputField.scss";

export const InputField = ({
  type = "text",
  keyName = "",
  onChange = null,
  placeholder = "",
  maxLength = 20,
  validation = null,
  index = 0,
  style = {},
  initialValue = "",
}) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const updateValue = ({ value }) => {
    setValue(value);
    typeof validation === "function" && validation({ value, setError });
    typeof onChange === "function" && onChange({ key: keyName, value, index });
  };

  const handleInputChange = (e) => {
    const _value = e.target.value;
    updateValue({ value: _value });
  };

  useEffect(() => {
    if (initialValue.length > 0) {
      updateValue(initialValue);
    }
  }, []);

  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
        maxLength={maxLength}
        style={{ padding: 4 }}
      />
      <p role="inputError" className="input">
        {error}
      </p>
    </>
  );
};
