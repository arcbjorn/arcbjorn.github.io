import * as React from "react";
import { Trans } from "react-i18next";

// import { ETranslationKey } from "i18n/types";

import { TPlatformLink } from "../types";
import { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core";

import * as css from "./platformLink.module.css";

type PlatformLinkProps = TPlatformLink & {
  children?: ReactNode;
};

const PlatformLink: React.FunctionComponent<PlatformLinkProps> = ({
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
        <FontAwesomeIcon
          icon={[iconPrefix as IconPrefix, icon as IconName]}
          title={iconTitle}
          className={css.platformLinkIcon}
        />
        {title}
      </div>
      <Trans>{description}</Trans>
    </a>
  );
};

export default PlatformLink;
