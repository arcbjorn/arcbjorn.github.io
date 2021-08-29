import React from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faLinkedin,
  faGithub,
  faTelegramPlane,
} from "@fortawesome/free-brands-svg-icons";

import Header from "components/header/Header";

import * as css from "./layout.module.css";

library.add(faLinkedin, faGithub, faTelegramPlane);

export const Layout: React.FunctionComponent = ({ children }) => (
  <div className={css.layout}>
    <div className="h-1/6">
      <Header />
    </div>
    <div className="h-5/6">{children}</div>
  </div>
);

export default Layout;
