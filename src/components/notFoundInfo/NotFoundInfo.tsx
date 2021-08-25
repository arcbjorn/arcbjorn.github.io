import * as React from "react";
import { Link } from "gatsby";

import * as css from "./notFoundInfo.module.css";

const NotFoundInfo: React.FunctionComponent = () => {
  return (
    <div className={css.info}>
      <div className={css.message}>
        <h1>Page not found</h1>
        <Link to="/">Go back</Link>
      </div>
    </div>
  );
};

export default NotFoundInfo;
