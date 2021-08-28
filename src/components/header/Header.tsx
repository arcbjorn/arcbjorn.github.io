import React from "react";
import { Link, Trans } from "gatsby-plugin-react-i18next";
import { ThemeToggler } from "gatsby-plugin-dark-mode";

import { ETranslationKey } from "i18n/types";
import ThemeToggle from "components/themeToggle/ThemeToggle";
import LanguageSwitch from "components/languageSwitch/LanguageSwitch";

import * as css from "./header.module.css";

const logoText = "arcbjorn";

enum Route {
  about = "/",
  library = "/library",
}

export const Header: React.FunctionComponent = () => {
  return (
    <div className={css.header}>
      <Link className={css.logo} to={Route.about}>
        {logoText}
      </Link>
      <div className={css.nav}>
        <div className={css.links}>
          <Link
            className={css.link}
            activeClassName={css.activeRoute}
            to={Route.about}
          >
            <Trans>{ETranslationKey.ABOUT}</Trans>
          </Link>
          <Link
            className={css.link}
            to={Route.library}
            activeClassName={css.activeRoute}
          >
            <Trans>{ETranslationKey.LIBRARY}</Trans>
          </Link>
        </div>
        <LanguageSwitch />
        <ThemeToggler>{ThemeToggle}</ThemeToggler>
      </div>
    </div>
  );
};

export default Header;
