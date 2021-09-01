import * as React from "react";
import { Trans } from "react-i18next";

import { ETranslationKey } from "i18n/types";

import PlatformLink from "./link/PlatformLink";
import links from "./platformLinksData";

import * as css from "./platformLinks.module.css";
import {
  extraInnerSection,
  extraSectionTitle,
  noScrollbar,
} from "components/extraInfo/extraInfo.module.css";

const PlatformLinks: React.FunctionComponent = () => {
  return (
    <fieldset className={`${extraInnerSection} ${noScrollbar}`}>
      <legend className={extraSectionTitle}>
        <Trans>{ETranslationKey.PLATFORMS_TITLE}</Trans>
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