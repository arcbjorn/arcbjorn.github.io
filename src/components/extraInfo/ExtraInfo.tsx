import * as React from "react";

import Books from "components/books/Books";
import PlatformLinks from "components/platformLinks/PlatformLinks";

import * as css from "./extraInfo.module.css";

const ExtraInfo: React.FunctionComponent = () => {
  return (
    <div className={css.extraInfo}>
      <div className={`${css.extraSection} w-full sm:w-5/12`}>
        <PlatformLinks />
      </div>
      <div className={`${css.extraSection} w-full sm:w-7/12`}>
        <Books />
      </div>
    </div>
  );
};

export default ExtraInfo;
