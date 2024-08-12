import React, { ReactNode, useState } from "react";
import { withPrefix } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core";
import { EIconLibrary } from "types";
import * as css from "components/about/quickLinks/link/quickLink.module.css";
import { useTranslation } from "react-i18next";
import { Ei18nToken } from "i18n/types";
import { TLink } from "data/types";

type TCopyLinkProps = {
  link: Omit<TLink, "category"> & {
    children?: ReactNode;
  };
  copyToClipboard: boolean;
};

export const QuickLink: React.FunctionComponent<TCopyLinkProps> = (props) => {
  const { title, href, icon, iconPrefix, iconTitle } = props.link;
  const { copyToClipboard } = props;
  const { t } = useTranslation();
  const [isCopied, setIsCopied] = useState(false);

  let processedHref: string = href;
  let cvLinkCss = "";
  let translatedTitle = title;

  if (title === Ei18nToken.CV) {
    processedHref = withPrefix(href);
    cvLinkCss = css.cvLink;
    translatedTitle = t(Ei18nToken.CV);

    if (copyToClipboard) {
      processedHref = `${window.location.origin}${processedHref}`;
    }
  }

  const isMaterialIcon = iconPrefix === EIconLibrary.MATERIAL;

  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (copyToClipboard) {
      e.preventDefault();
      try {
        await navigator.clipboard.writeText(processedHref);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      } catch (err) {
        console.error("Failed to copy text: ", err);
      }
    }
  };

  return (
    <a
      className={`${css.quickLink} ${cvLinkCss}`}
      href={processedHref}
      target={copyToClipboard ? "_self" : "_blank"}
      onClick={handleClick}
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
      {isCopied ? "Copied!" : translatedTitle}
    </a>
  );
};

export default QuickLink;
