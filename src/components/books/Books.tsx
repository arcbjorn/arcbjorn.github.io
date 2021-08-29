import * as React from "react";
import { Trans } from "gatsby-plugin-react-i18next";

import { ETranslationKey } from "i18n/types";
import * as css from "./books.module.css";
import { extraSectionTitle } from "components/extraInfo/extraInfo.module.css";

const Books: React.FunctionComponent = () => {
  return (
    <div className={css.books}>
      <div className={extraSectionTitle}>
        <Trans>{ETranslationKey.BOOKS_TITLE}</Trans>
      </div>
    </div>
  );
};

export default Books;
