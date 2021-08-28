import React from "react";

import * as css from "./quickLinks.module.css";
import QuickLink from "./link/QuickLink";
import links from "./quickLinksData";

export const QuickLinks: React.FunctionComponent = () => {
  return (
    <div className={css.quickLinks}>
      {links.map(({ title, href, icon, iconPrefix, iconTitle }, i) => (
        <QuickLink
          key={i}
          title={title}
          href={href}
          icon={icon}
          iconPrefix={iconPrefix}
          iconTitle={iconTitle}
        />
      ))}
    </div>
  );
};

export default QuickLinks;
