import React from "react";

import QuickLink from "components/about/quickLinks/link/QuickLink";
import links from "components/about/quickLinks/quickLinksData";

import * as css from "components/about/quickLinks/quickLinks.module.css";

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