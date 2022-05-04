import * as React from "react";
import { Trans } from "react-i18next";

import { Ei18nToken } from "i18n/types";

import PlatformLink from "components/extra/extraLinks/platform/PlatformLink";
import platformLinks from "data/platformLinks";

import SocialLink from "components/extra/extraLinks/social/SocialLink";
import socialLinks from "data/socialLinks";

import * as css from "components/extra/extraLinks/extraLinks.module.css";

import {
  extraInnerSection,
  extraSectionTitle,
  noScrollbar,
} from "components/extra/extraInfo.module.css";

const ExtraLinks: React.FunctionComponent = () => {
  return (
    <fieldset className={`${extraInnerSection} ${noScrollbar}`}>
      <legend className={extraSectionTitle}>
        <Trans>{Ei18nToken.PLATFORMS_TITLE}</Trans>
      </legend>

      <div className={css.platformLinks}>
        {platformLinks.map(
          ({ title, href, icon, iconPrefix, iconTitle, description }) => (
            <PlatformLink
              key={title}
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

      <div className={css.socialLinks}>
        {socialLinks.map(({ href, icon, iconPrefix, iconTitle }) => (
          <SocialLink
            key={icon}
            href={href}
            icon={icon}
            iconPrefix={iconPrefix}
            iconTitle={iconTitle}
          />
        ))}
      </div>
    </fieldset>
  );
};

export default ExtraLinks;
