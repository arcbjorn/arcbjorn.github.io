import React from "react";

import CopyLink from "components/copy_links/CopyLink";
import links from "data/copyLinks";
import * as css from "components/about/quickLinks/quickLinks.module.css";

export const Terminal: React.FunctionComponent = () => {
  return (
    <div className="flex flex-col h-full items-center pt-10 sm:pt-16 px-6">
      <h3 className="text-xl sm:text-2xl font-bold">Click to copy link:</h3>
      <div className={`${css.quickLinks} flex-col`}>
        {links.map((link) => (
          <CopyLink key={link.title} link={link} copyToClipboard={true} />
        ))}
      </div>
    </div>
  );
};

export default Terminal;
