import { Link } from "gatsby";
import React from "react";
import * as css from "./header.module.css";

export const Header: React.FunctionComponent = () => (
  <div>
    <Link className={css.link} to="/">
      home
    </Link>
    <Link className={css.link} to="#contact">
      contact
    </Link>
    <Link className={css.link} to="/library">
      library
    </Link>
  </div>
);
