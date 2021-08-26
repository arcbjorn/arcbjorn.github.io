import React, { ReactNode } from "react";

import * as css from "./quickLink.module.css";

type QuickLinkProps = {
  title: string;
  href: string;
  icon?: string;
  children?: ReactNode;
};

export const QuickLink: React.FunctionComponent<QuickLinkProps> = ({
  title,
  href,
}) => {
  return (
    <a
      className={css.quickLink}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {title}
    </a>
  );
};

export default QuickLink;
