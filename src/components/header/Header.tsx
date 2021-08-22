import React from "react";
import { Link } from "gatsby";
import { ThemeToggler } from "gatsby-plugin-dark-mode";

import ThemeToggle from "components/themeToggle/ThemeToggle";
import * as css from "./header.module.css";

enum Route {
  about = "/",
  library = "/library",
}

export const Header: React.FunctionComponent = () => {
  return (
    <div className={css.header}>
      <Link className={css.logo} to={Route.about}>
        arcbjorn
      </Link>
      <div className={css.nav}>
        <Link
          className={css.link}
          activeClassName={css.activeRoute}
          to={Route.about}
        >
          about
        </Link>
        <Link
          className={css.link}
          to={Route.library}
          activeClassName={css.activeRoute}
        >
          library
        </Link>
        <ThemeToggler>{ThemeToggle}</ThemeToggler>
      </div>
    </div>
  );
};

export default Header;
