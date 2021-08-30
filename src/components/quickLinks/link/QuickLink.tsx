import React, { ReactNode } from "react";
import { withPrefix } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core";
import { EIconLibrary } from "pages/types";
import { TQuickLink, EQuickLinkTitle } from "components/quickLinks/types";

import * as css from "./quickLink.module.css";
import { useTranslation } from "react-i18next";
import { ETranslationKey } from "i18n/types";

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

  const processedHref = title === EQuickLinkTitle.CV ? withPrefix(href) : href;

  const cvLinkCss = title === EQuickLinkTitle.CV ? css.cvLink : "";

  const isMaterialIcon = iconPrefix === EIconLibrary.MATERIAL;

  const translatedTitle =
    title === EQuickLinkTitle.CV ? t(ETranslationKey.CV) : title;

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
