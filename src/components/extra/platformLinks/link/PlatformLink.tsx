import * as React from "react";
import { Trans } from "react-i18next";

import {
  EPlatformLinkTitle,
  TPlatformLink,
} from "components/extra/platformLinks/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core";

import * as css from "components/extra/platformLinks/link/platformLink.module.css";

type PlatformLinkProps = TPlatformLink & {
  children?: React.ReactNode;
};

const PlatformLink: React.FunctionComponent<PlatformLinkProps> = ({
  title,
  href,
  icon,
  iconPrefix,
  iconTitle,
  description,
}) => {
  const [isLinkHovered, toggleHover] = React.useState(false);

  const toggleTitleColor = () => {
    toggleHover(!isLinkHovered);
  };

  const noIconsList = [
    EPlatformLinkTitle.GLITCH,
    EPlatformLinkTitle.STEPIK,
    EPlatformLinkTitle.LEETCODE,
  ];

  const noIcon = noIconsList.some((t) => t === title);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={css.platformLink}
      onMouseEnter={toggleTitleColor}
      onMouseLeave={toggleTitleColor}
    >
      <div
        className={`${css.platformLinkTitle} ${
          isLinkHovered ? css.platformLinkTitleHover : ""
        }`}
      >
        {noIcon ? (
          ""
        ) : (
          <FontAwesomeIcon
            icon={[iconPrefix as IconPrefix, icon as IconName]}
            title={iconTitle}
            className={css.platformLinkIcon}
          />
        )}
        {title}
      </div>
      <span className={css.platformLinkDescription}>
        <Trans>{description}</Trans>
      </span>
    </a>
  );
};

export default PlatformLink;