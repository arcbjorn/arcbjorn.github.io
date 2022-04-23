import * as React from "react";
import { Trans } from "react-i18next";

import { Ei18nToken } from "i18n/types";

import PlatformLink from "components/extra/platformLinks/link/PlatformLink";
import links from "components/extra/platformLinks/platformLinksData";

import * as css from "components/extra/platformLinks/platformLinks.module.css";

import {
  extraInnerSection,
  extraSectionTitle,
  noScrollbar,
} from "components/extra/extraInfo.module.css";

const PlatformLinks: React.FunctionComponent = () => {
  return (
    <fieldset className={`${extraInnerSection} ${noScrollbar}`}>
      <legend className={extraSectionTitle}>
        <Trans>{Ei18nToken.PLATFORMS_TITLE}</Trans>
      </legend>
      <div className={css.platformLinks}>
        {links.map(
          ({ title, href, icon, iconPrefix, iconTitle, description }, i) => (
            <PlatformLink
              key={i}
              title={title}
              href={href}
              icon={icon}
              iconPrefix={iconPrefix}
              iconTitle={iconTitle}
              description={description}
            />
          )
        )}
      </div>
    </fieldset>
  );
};

export default PlatformLinks;
