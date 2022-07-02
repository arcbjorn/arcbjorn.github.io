import React, { useEffect } from "react";

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
  faHashnode,
  faMedium,
  faTwitter,
  faReddit,
  faInstagram,
  faSpotify,
  faGoodreads,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";

import Header from "components/header/Header";

import * as css from "layouts/layout.module.css";

library.add(
  faLinkedin,
  faGithub,
  faTelegramPlane,
  faCodepen,
  faHackerrank,
  faDev,
  faFreeCodeCamp,
  faGalacticRepublic,
  faHashnode,
  faMedium,
  faTwitter,
  faReddit,
  faInstagram,
  faSpotify,
  faGoodreads,
  faStackOverflow
);

interface ILayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FunctionComponent<ILayoutProps> = ({ children }) => {
  return (
    <div className={css.layout}>
      <div className="h-1/10">
        <Header />
      </div>
      <div className="h-5/6">{children}</div>
    </div>
  );
};

export default Layout;
