import * as React from "react";

import Books from "components/extra/books/Books";
import PlatformLinks from "components/extra/platformLinks/PlatformLinks";

import * as css from "components/extra/extraInfo.module.css";

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
