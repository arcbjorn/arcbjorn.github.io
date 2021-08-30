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

type customNode = {
  type?: {
    name: string;
  };
};

export const Layout: React.FunctionComponent = ({ children }) => {
  let headerHeightClass = "h-1/6";

  if ((children as ReactNodeArray).length) {
    if (
      (children as ReactNodeArray).some(
        (node) => (node as customNode).type?.name === "ExtraInfo"
      )
    ) {
      headerHeightClass = "h-1/10";
    }
  }

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
