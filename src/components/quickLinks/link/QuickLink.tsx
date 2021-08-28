import React, { ReactNode } from "react";
import { withPrefix } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import * as css from "./quickLink.module.css";
import { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core";
import { TQuickLink, EQuickLinkTitle } from "components/quickLinks/types";

type QuickLinkProps = TQuickLink & {
  children?: ReactNode;
};

export const QuickLink: React.FunctionComponent<QuickLinkProps> = ({
  title,
  href,
  icon,
  iconPrefix,
  iconTitle,
}) => {
  const processedHref =
    title === EQuickLinkTitle.RESUME ? withPrefix(href) : href;

  return (
    <a
      className={css.quickLink}
      href={processedHref}
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
