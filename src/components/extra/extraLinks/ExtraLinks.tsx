import * as React from "react";
import { Trans } from "react-i18next";

import { Ei18nToken } from "i18n/types";

import PlatformLink from "components/extra/extraLinks/platform/PlatformLink";
import {
  customLinks,
  learningLinks,
  blogLinks,
  showcaseLinks,
} from "data/platformLinks";

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
        {customLinks.map((link) => (
          <PlatformLink key={link.title} link={link} />
        ))}

        <div className={css.divider}>
          <span className="material-icons">terminal</span>
        </div>

        {learningLinks.map((link) => (
          <PlatformLink key={link.title} link={link} />
        ))}

        <div className={css.divider}>
          <span className="material-icons">notes</span>
        </div>

        {blogLinks.map((link) => (
          <PlatformLink key={link.title} link={link} />
        ))}

        <div className={css.divider}>
          <span className="material-icons">slideshow</span>
        </div>

        {showcaseLinks.map((link) => (
          <PlatformLink key={link.title} link={link} />
        ))}
      </div>

      <div className={css.socialLinks}>
        {socialLinks.map((link) => (
          <SocialLink key={link.icon} link={link} />
        ))}
      </div>
    </fieldset>
  );
};

export default ExtraLinks;
