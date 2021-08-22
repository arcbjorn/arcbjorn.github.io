import React from "react";
import { Link } from "gatsby";
import { navigate } from "@reach/router";
import { ThemeToggler } from "gatsby-plugin-dark-mode";

import ThemeToggle from "components/themeToggle/ThemeToggle";
import * as css from "./header.module.css";

export const Header: React.FunctionComponent = () => {
  const route = {
    home: "/",
    links: "/#links",
    library: "/library",
  };

  const goToLinks = function () {
    navigate(route.links);
  };

  return (
    <div className={css.header}>
      <Link className="cursor-pointer" to={route.home}>
        arcbjorn
      </Link>
      <div className={css.customLink} onClick={goToLinks}>
        links
      </div>
      <Link className={css.link} to={route.library}>
        library
      </Link>
      <ThemeToggler>{ThemeToggle}</ThemeToggler>
    </div>
  );
};

export default Header;
