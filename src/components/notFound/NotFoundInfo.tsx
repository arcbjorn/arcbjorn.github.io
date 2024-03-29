import * as React from "react";
import { Link, Trans } from "gatsby-plugin-react-i18next";

import { Ei18nToken } from "i18n/types";
import * as css from "components/notFound/notFoundInfo.module.css";

const NotFoundInfo: React.FunctionComponent = () => {
  return (
    <div className={css.info}>
      <div className={css.message}>
        <h1>
          <Trans>{Ei18nToken.PAGE_NOT_FOUND}</Trans>
        </h1>
        <Link to="/">
          <span className={css.link}>
            <Trans>{Ei18nToken.GO_BACK}</Trans>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundInfo;
