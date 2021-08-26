import React from "react";

import TypeWriter from "components/typeWriter/TypeWriter";
import QuickLinks from "components/quickLinks/QuickLinks";

import * as css from "./terminal.module.css";

export const Terminal: React.FunctionComponent = () => {
  return (
    <div className={css.terminal}>
      <div className={css.window}>
        <TypeWriter />
        <QuickLinks />
      </div>
    </div>
  );
};

export default Terminal;
