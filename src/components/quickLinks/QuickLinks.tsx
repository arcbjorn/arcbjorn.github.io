import React from "react";

import * as css from "./quickLinks.module.css";
import QuickLink from "./link/QuickLink";

const mailTo =
  "mailto:oleg.luganskiy@gmail.com?subject=Employment%20Offer&body=Hi%20Oleg";

const links = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com",
    iconPrefix: "fab",
    icon: "linkedin",
    iconTitle: "LinkedIn account",
  },
  {
    title: "Github",
    href: "https://www.github.com/arcbjorn",
    iconPrefix: "fab",
    icon: "github",
    iconTitle: "Github account",
  },
  {
    title: "Mail",
    href: mailTo,
    iconPrefix: "far",
    icon: "envelope",
    iconTitle: "Email address",
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
    href: "OL.CV.pdf",
    iconPrefix: "far",
    icon: "file-alt",
    iconTitle: "Resume",
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
