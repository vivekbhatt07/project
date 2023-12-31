import React from "react";
import { Link } from "react-router-dom";

const TextActionLink = (props) => {
  const { children, className, reach } = props;
  const classes =
    className +
    " text-sm font-semibold text-stone-700 hover:text-stone-950 transition-all";
  return (
    <Link className={classes} to={reach}>
      {children}
    </Link>
  );
};

export default TextActionLink;
