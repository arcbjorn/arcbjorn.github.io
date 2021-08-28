import React, { ReactNode } from "react";
import { withPrefix } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core";
import { TQuickLink, EQuickLinkTitle } from "components/quickLinks/types";

import * as css from "./quickLink.module.css";

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

  const resumeLinkCss = title === EQuickLinkTitle.RESUME ? css.resumeLink : "";

  return (
    <a
      className={`${css.quickLink} ${resumeLinkCss}`}
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
