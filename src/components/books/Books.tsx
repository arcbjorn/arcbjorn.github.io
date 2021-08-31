import * as React from "react";
import { Trans } from "gatsby-plugin-react-i18next";

import { ETranslationKey } from "i18n/types";
// import * as css from "./books.module.css";
import {
  extraSectionTitle,
  extraInnerSection,
} from "components/extraInfo/extraInfo.module.css";

const Books: React.FunctionComponent = () => {
  return (
    <fieldset className={extraInnerSection}>
      <legend className={extraSectionTitle}>
        <Trans>{ETranslationKey.BOOKS_TITLE}</Trans>
      </legend>
    </fieldset>
  );
};

export default Books;
