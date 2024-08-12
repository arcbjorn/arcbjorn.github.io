import * as React from "react";
import { Trans } from "gatsby-plugin-react-i18next";

import { Ei18nToken } from "i18n/types";
import {
  extraSectionTitle,
  extraInnerSection,
  noScrollbar,
} from "components/extra/extraInfo.module.css";

import languages from "data/languagesData";
import Language from "components/extra/languages/language/Language";

import * as css from "components/extra/languages/languages.module.css";

const Languages: React.FunctionComponent = () => {
  return (
    <fieldset className={`${extraInnerSection} ${noScrollbar}`}>
      <legend className={extraSectionTitle}>
        <Trans>{Ei18nToken.LANGUAGES_TITLE}</Trans>
      </legend>
      <div className={css.languages}>
        {languages.map(({ name, level }, i) => (
          <div key={name + i} className={css.languageEntry}>
            <svg width="70" height="50" className={css.treeNode}>
              <line
                x1="30"
                y1="25"
                x2="60"
                y2="25"
                stroke="current"
                strokeWidth="3"
              />
              <line
                x1="30"
                y1="0"
                x2="30"
                y2="50"
                stroke="current"
                strokeWidth="3"
              />
            </svg>
            <Language name={name} level={level} />
          </div>
        ))}
      </div>
    </fieldset>
  );
};

export default Languages;
