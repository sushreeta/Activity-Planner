import * as React from "react";
import "./customButton.scss";

export const CustomButton = ({
  onClick = () => {},
  customStyleCN = {},
  disabled = false,
  text = "",
  children = null,
}) => {
  const styleClassname = `button ${customStyleCN}`;
  return (
    <button className={styleClassname} onClick={onClick} disabled={disabled}>
      {!!children ? children : text}
    </button>
  );
};
