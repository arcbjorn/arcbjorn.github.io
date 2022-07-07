import React from "react";
import { Link, Trans } from "gatsby-plugin-react-i18next";
import { ThemeToggler } from "gatsby-plugin-dark-mode";

import { Ei18nToken } from "i18n/types";
import ThemeToggle from "components/header/themeToggle/ThemeToggle";
import LanguageSwitch from "components/header/languageSwitch/LanguageSwitch";
import TimeZone from "components/header/timeZone/TimeZone";

import * as css from "components/header/header.module.css";

const logoText = "arcbjorn";

enum Route {
  about = "/",
  extra = "/extra",
}

export const Header: React.FunctionComponent = () => {
  return (
    <div className={css.header}>
      <Link className={css.logo} to={Route.about}>
        {logoText}
      </Link>
      <TimeZone />
      <div className={css.nav}>
        <div className={css.links}>
          <Link
            className={css.link}
            activeClassName={css.activeRoute}
            to={Route.about}
          >
            <Trans>{Ei18nToken.ABOUT}</Trans>
          </Link>
          <Link
            className={css.link}
            to={Route.extra}
            activeClassName={css.activeRoute}
          >
            <Trans>{Ei18nToken.EXTRA}</Trans>
          </Link>
        </div>
        <LanguageSwitch />
        <ThemeToggler>{ThemeToggle}</ThemeToggler>
      </div>
    </div>
  );
};

export default Header;
