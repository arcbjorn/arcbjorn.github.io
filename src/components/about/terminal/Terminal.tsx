import React, { useState } from "react";

import TypeWriter from "components/about/typeWriter/TypeWriter";
import QuickLinks from "components/about/quickLinks/QuickLinks";

import * as css from "components/about/terminal/terminal.module.css";

export const Terminal: React.FunctionComponent = () => {
  const [quickLinksVisibility, setQuickLinksVisibility] = useState(false);

  const toggleQuickLinksVisibility = () => {
    setQuickLinksVisibility(!quickLinksVisibility);
  };

  return (
    <div className={css.terminal}>
      <div className={css.window}>
        <TypeWriter toggleQuickLinksVisibility={toggleQuickLinksVisibility} />
        {quickLinksVisibility ? <QuickLinks /> : ""}
      </div>
    </div>
  );
};

export default Terminal;
