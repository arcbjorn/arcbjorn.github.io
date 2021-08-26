import React from "react";

import * as css from "./quickLinks.module.css";
import QuickLink from "./link/QuickLink";

const links = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com",
    iconPrefix: "fab",
    icon: "linkedin",
    iconTitle: "LinkedIn account of Oleg Luganskiy",
  },
  {
    title: "Github",
    href: "https://www.github.com/arcbjorn",
    iconPrefix: "fab",
    icon: "github",
    iconTitle: "Github account of Arcbjorn",
  },
  {
    title: "Mail",
    href: "https://www.facebook.com",
    iconPrefix: "far",
    icon: "envelope",
    iconTitle: "Email address of Arcbjorn",
  },
  // {
  //   title: "Telegram",
  //   href: "https://www.facebook.com",
  //   icon: "telegram-plane",
  //   iconPrefix: "fab",
  //   iconTitle: "Telegram of Arcbjorn",
  // },
  {
    title: "Resume",
    href: "https://www.facebook.com",
    iconPrefix: "far",
    icon: "file-alt",
    iconTitle: "Resume of Arcbjorn",
  },
];

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
