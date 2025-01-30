import * as React from "react";
import { Trans } from "gatsby-plugin-react-i18next";
import { TLanguage } from "components/extra/languages/types";
import { Ei18nToken } from "i18n/types";
import MatrixEffect from "./matrixEffect";
import * as css from "components/extra/languages/language/language.module.css";

type TLanguageProps = Omit<TLanguage, "category"> & {
  children?: React.ReactNode;
};

const Language: React.FunctionComponent<TLanguageProps> = ({ name, level }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const getLevelToken = (numLevel: number): Ei18nToken => {
    switch (numLevel) {
      case 100:
        return Ei18nToken.LANG_LEVEL_NATIVE;
      case 90:
        return Ei18nToken.LANG_LEVEL_FLUENT;
      case 70:
        return Ei18nToken.LANG_LEVEL_BASIC;
      default:
        return Ei18nToken.LANG_LEVEL_BASIC;
    }
  };

  return (
    <div
      className={css.language}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={css.nameLevel}>
        <Trans>{name}</Trans>
        <div className={css.levelBar}>
          <div className={css.levelBackground}>
            <div
              className={css.levelFill}
              style={{
                width: isHovered ? `${level}%` : "0%",
              }}
            >
              <MatrixEffect
                isHovered={isHovered}
                level={level}
                languageToken={name}
              />
            </div>
          </div>
          {isHovered && (
            <span
              className={css.levelText}
              style={{
                color: "var(--bg)",
                right: "15px",
                zIndex: 2,
              }}
            >
              <Trans>{getLevelToken(level)}</Trans>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Language;
