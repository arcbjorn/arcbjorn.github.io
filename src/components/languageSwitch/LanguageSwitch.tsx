import React from "react";
import { useI18next } from "gatsby-plugin-react-i18next";
import * as css from "components/languageSwitch/languageSwitch.module.css";

const LanguageSwitch: React.FunctionComponent = () => {
  const { languages, language, changeLanguage } = useI18next();

  let selectOptionBackGroundStyle = "";
  // @ts-expect-error detect is if browser is Firefox
  if (typeof InstallTrigger !== "undefined") {
    selectOptionBackGroundStyle = css.option;
  }

  return (
    <div>
      <select
        value={language}
        className={css.select}
        onChange={($event) => changeLanguage($event.target.value)}
      >
        {languages.map((lang) => (
          <option className={selectOptionBackGroundStyle} key={lang}>
            {lang}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSwitch;
