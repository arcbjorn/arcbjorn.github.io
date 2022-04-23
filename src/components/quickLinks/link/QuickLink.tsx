import React, { ReactNode } from "react";
import { withPrefix } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core";
import { EIconLibrary } from "types";
import { TQuickLink } from "components/quickLinks/types";

import * as css from "components/quickLinks/link/quickLink.module.css";
import { useTranslation } from "react-i18next";
import { Ei18nToken } from "i18n/types";

type QuickLinkProps = TQuickLink & {
  children?: ReactNode;
};

export const QuickLink: React.FunctionComponent<QuickLinkProps> = ({
  title,
  href,
  icon,
  iconPrefix,
  iconTitle,
}) => {
  const { t } = useTranslation();

  let processedHref = href;
  let cvLinkCss = "";
  let translatedTitle = title;

  if (title === Ei18nToken.CV) {
    processedHref = withPrefix(href);
    cvLinkCss = css.cvLink;
    translatedTitle = t(Ei18nToken.CV);
  }

  const isMaterialIcon = iconPrefix === EIconLibrary.MATERIAL;

  return (
    <a
      className={`${css.quickLink} ${cvLinkCss}`}
      href={processedHref}
      target="_blank"
      rel="noopener noreferrer"
    >
      {isMaterialIcon ? (
        <span className={`${css.icon} material-icons`}>{icon}</span>
      ) : (
        <FontAwesomeIcon
          className={css.icon}
          icon={[iconPrefix as IconPrefix, icon as IconName]}
          title={iconTitle}
        />
      )}
      {translatedTitle}
    </a>
  );
};

export default QuickLink;
