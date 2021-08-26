import React from "react";

import * as css from "./quickLinks.module.css";
import QuickLink from "./link/QuickLink";

const links = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com",
  },
  {
    title: "Google",
    href: "https://www.google.com",
  },
  {
    title: "Facebook",
    href: "https://www.facebook.com",
  },
];

export const QuickLinks: React.FunctionComponent = () => {
  return (
    <div className={css.quickLinks}>
      {links.map(({ title, href }, i) => (
        <QuickLink title={title} href={href} key={i} />
      ))}
    </div>
  );
};

export default QuickLinks;
