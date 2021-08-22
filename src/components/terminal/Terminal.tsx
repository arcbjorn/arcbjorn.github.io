import React from "react";

import TypeWriter from "components/typeWriter/TypeWriter";
import * as css from "./terminal.module.css";

export const Terminal: React.FunctionComponent = () => {
  return (
    <div className={css.terminal}>
      <div className={css.window}>
        <TypeWriter />
      </div>
    </div>
  );
};

export default Terminal;
