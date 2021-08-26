import React from "react";

import * as css from "./quickLinks.module.css";
import QuickLink from "./link/QuickLink";

const links = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com",
  },
  {
    title: "Github",
    href: "https://www.github.com/arcbjorn",
  },
  {
    title: "Mail",
    href: "https://www.facebook.com",
  },
  {
    title: "Telegram",
    href: "https://www.facebook.com",
  },
  {
    title: "Resume",
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
