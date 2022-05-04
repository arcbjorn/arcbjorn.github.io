import React from "react";

import QuickLink from "components/about/quickLinks/link/QuickLink";
import links from "data/quickLinks";

import * as css from "components/about/quickLinks/quickLinks.module.css";

export const QuickLinks: React.FunctionComponent = () => {
  return (
    <div className={css.quickLinks}>
      {links.map((link) => (
        <QuickLink key={link.title} link={link} />
      ))}
    </div>
  );
};

export default QuickLinks;
