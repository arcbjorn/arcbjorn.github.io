import * as React from "react";
import { Trans } from "gatsby-plugin-react-i18next";

import { ETranslationKey } from "i18n/types";
import * as css from "./books.module.css";

const Books: React.FunctionComponent = () => {
  return (
    <div className={css.books}>
      <h1>
        <Trans>{ETranslationKey.BOOKS_TITLE}</Trans>
      </h1>
    </div>
  );
};

export default Books;
