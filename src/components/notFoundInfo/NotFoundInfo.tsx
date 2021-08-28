import * as React from "react";
import { Link, Trans } from "gatsby-plugin-react-i18next";

import { ETranslationKey } from "i18n/types";
import * as css from "./notFoundInfo.module.css";

const NotFoundInfo: React.FunctionComponent = () => {
  return (
    <div className={css.info}>
      <div className={css.message}>
        <h1>
          <Trans>{ETranslationKey.PAGE_NOT_FOUND}</Trans>
        </h1>
        <Link to="/">
          <Trans>{ETranslationKey.GO_BACK}</Trans>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundInfo;
