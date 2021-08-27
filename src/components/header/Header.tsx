import React from "react";
import { Link, Trans } from "gatsby-plugin-react-i18next";
import { ThemeToggler } from "gatsby-plugin-dark-mode";

import ThemeToggle from "components/themeToggle/ThemeToggle";
import * as css from "./header.module.css";
import LanguageSwitch from "components/languageSwitch/LanguageSwitch";

enum Route {
  about = "/",
  library = "/library",
}

export const Header: React.FunctionComponent = () => {
  return (
    <div className={css.header}>
      <Link className={css.logo} to={Route.about}>
        arc
      </Link>
      <div className={css.nav}>
        <Link
          className={css.link}
          activeClassName={css.activeRoute}
          to={Route.about}
        >
          <Trans>about</Trans>
        </Link>
        <Link
          className={css.link}
          to={Route.library}
          activeClassName={css.activeRoute}
        >
          <Trans>library</Trans>
        </Link>
        <ThemeToggler>{ThemeToggle}</ThemeToggler>
        <LanguageSwitch />
      </div>
    </div>
  );
};

export default Header;
