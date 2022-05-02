import * as React from "react";
import { Trans } from "react-i18next";

import { TPlatformLink } from "components/extra/extraLinks/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core";

import * as css from "components/extra/extraLinks/platform/platformLink.module.css";
import { EIconLibrary } from "types";

const PlatformLink: React.FunctionComponent<TPlatformLink> = ({
  title,
  href,
  icon,
  iconPrefix,
  iconTitle,
  description,
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={css.platformLink}
    >
      <div className={css.platformLinkTitle}>
        {iconPrefix !== EIconLibrary.CUSTOM && (
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
