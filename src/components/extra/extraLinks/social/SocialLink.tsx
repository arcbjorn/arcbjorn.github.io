import * as React from "react";

import { TLink } from "data/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core";

import * as css from "components/extra/extraLinks/social/socialLink.module.css";

const SocialLink: React.FunctionComponent<Omit<TLink, "category">> = ({
  href,
  icon,
  iconPrefix,
  iconTitle,
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={css.socialLinkIcon}
    >
      <FontAwesomeIcon
        icon={[iconPrefix as IconPrefix, icon as IconName]}
        title={iconTitle}
      />
    </a>
  );
};

export default SocialLink;
