import React, { ReactNodeArray } from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faLinkedin,
  faGithub,
  faTelegramPlane,
  faCodepen,
  faHackerrank,
  faDev,
  faFreeCodeCamp,
  faGalacticRepublic,
} from "@fortawesome/free-brands-svg-icons";

import Header from "components/header/Header";
import { isExtraInfoPage } from "./helpers";

import * as css from "./layout.module.css";

library.add(
  faLinkedin,
  faGithub,
  faTelegramPlane,
  faCodepen,
  faHackerrank,
  faDev,
  faFreeCodeCamp,
  faGalacticRepublic
);

export const Layout: React.FunctionComponent = ({ children }) => {
  const headerHeightClass = isExtraInfoPage(children as ReactNodeArray)
    ? "h-1/10"
    : "h-1/6";

  isExtraInfoPage;

  return (
    <div className={css.layout}>
      <div className={headerHeightClass}>
        <Header />
      </div>
      <div className="h-5/6">{children}</div>
    </div>
  );
};

export default Layout;
