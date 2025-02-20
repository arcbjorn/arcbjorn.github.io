import * as React from "react";

import { IPlatformLinkPartial, TLink } from "data/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core";

import * as css from "components/extra/extraLinks/platform/platformLink.module.css";
import { EIconLibrary } from "types";
import { Trans } from "react-i18next";

type TPlatformLinkProps = {
  link: TLink<IPlatformLinkPartial>;
};

const PlatformLink: React.FunctionComponent<TPlatformLinkProps> = (props) => {
  const { title, href, icon, iconPrefix, iconTitle } = props.link;

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
        <Trans>{title}</Trans>
      </div>
    </a>
  );
};

export default PlatformLink;
