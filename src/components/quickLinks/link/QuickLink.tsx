import React, { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import * as css from "./quickLink.module.css";
import { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core";

type QuickLinkProps = {
  children?: ReactNode;
  title: string;
  href: string;
  icon: string;
  iconPrefix: string;
  iconTitle: string;
};

export const QuickLink: React.FunctionComponent<QuickLinkProps> = ({
  title,
  href,
  icon,
  iconPrefix,
  iconTitle,
}) => {
  return (
    <a
      className={css.quickLink}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon
        className={css.icon}
        icon={[iconPrefix as IconPrefix, icon as IconName]}
        title={iconTitle}
      />
      {title}
    </a>
  );
};

export default QuickLink;
