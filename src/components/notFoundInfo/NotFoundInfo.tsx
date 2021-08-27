import * as React from "react";
import { Link, Trans } from "gatsby-plugin-react-i18next";

import * as css from "./notFoundInfo.module.css";

const NotFoundInfo: React.FunctionComponent = () => {
  return (
    <div className={css.info}>
      <div className={css.message}>
        <h1>
          <Trans>pageNotFound</Trans>
        </h1>
        <Link to="/">
          <Trans>goBack</Trans>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundInfo;
