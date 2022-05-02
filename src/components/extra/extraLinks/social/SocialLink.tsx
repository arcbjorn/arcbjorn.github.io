import * as React from "react";

import { TSocialLink } from "components/extra/extraLinks/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core";

import * as css from "components/extra/extraLinks/social/socialLink.module.css";

const SocialLink: React.FunctionComponent<TSocialLink> = ({
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
        className={css.socialLinkIcon}
      />
    </a>
  );
};

export default SocialLink;
