import * as React from "react";
// import { Trans } from "react-i18next";

// import { ETranslationKey } from "i18n/types";

// import * as css from "./platformLink.module.css";
import { TPlatformLink } from "../types";
import { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core";

type PlatformLinkProps = TPlatformLink & {
  children?: ReactNode;
};

const PlatformLink: React.FunctionComponent<PlatformLinkProps> = ({
  title,
  href,
  icon,
  iconPrefix,
  iconTitle,
}) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon
        icon={[iconPrefix as IconPrefix, icon as IconName]}
        title={iconTitle}
      />
      {title}
    </a>
  );
};

export default PlatformLink;
