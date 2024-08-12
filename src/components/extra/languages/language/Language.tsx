import * as React from "react";
import { Trans } from "gatsby-plugin-react-i18next";

import { TLanguage } from "components/extra/languages/types";

import * as css from "components/extra/languages/language/language.module.css";

type TLanguageProps = Omit<TLanguage, "category"> & {
  children?: React.ReactNode;
};

const Book: React.FunctionComponent<TLanguageProps> = ({ name, level }) => {
  return (
    <div className={css.language}>
      <Trans>{name}</Trans>
      <span>{level}</span>
    </div>
  );
};

export default Book;
