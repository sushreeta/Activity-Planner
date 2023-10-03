import { default as React } from "react";
import "./title.scss";

export const Title = ({ text = "", customStyleCN = {} }) => {
  if (text?.length === 0) {
    return null;
  }

  const styleClassname = "title";
  if (customStyleCN.length > 0) {
    customStyleCN += styleClassname;
  }

  return <h2 className={styleClassname}>{text}</h2>;
};
