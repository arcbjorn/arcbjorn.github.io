import React from "react";
import { useI18next } from "gatsby-plugin-react-i18next";
import * as css from "components/languageSwitch/languageSwitch.module.css";

const LanguageSwitch: React.FunctionComponent = () => {
  const { languages, language, changeLanguage } = useI18next();

  return (
    <div>
      <select
        value={language}
        className={css.select}
        onChange={($event) => changeLanguage($event.target.value)}
      >
        {languages.map((lang) => (
          <option key={lang}>{lang}</option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSwitch;
