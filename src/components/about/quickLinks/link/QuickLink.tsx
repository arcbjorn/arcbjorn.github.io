import React, { ReactNode } from "react";
import { withPrefix } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core";
import { EIconLibrary } from "types";

import * as css from "components/about/quickLinks/link/quickLink.module.css";
import { useTranslation } from "react-i18next";
import { Ei18nToken } from "i18n/types";
import { TLink } from "data/types";

type TQuickLinkProps = {
  link: TLink & {
    children?: ReactNode;
  };
};

export const QuickLink: React.FunctionComponent<TQuickLinkProps> = (props) => {
  const { title, href, icon, iconPrefix, iconTitle } = props.link;
  const { t } = useTranslation();

  let processedHref: string = href;
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
