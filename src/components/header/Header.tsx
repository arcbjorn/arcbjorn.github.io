import React from "react";
import { Link } from "gatsby";
import { ThemeToggler } from "gatsby-plugin-dark-mode";

import ThemeToggle from "components/theme_toggle/ThemeToggle";
import * as css from "./header.module.css";

export const Header: React.FunctionComponent = () => (
  <div className={css.header}>
    <Link className={css.link} to="/">
      arcbjorn
    </Link>
    <Link className={css.link} to="#contact">
      contact
    </Link>
    <Link className={css.link} to="/library">
      library
    </Link>
    <ThemeToggler>{ThemeToggle}</ThemeToggler>
  </div>
);

export default Header;
