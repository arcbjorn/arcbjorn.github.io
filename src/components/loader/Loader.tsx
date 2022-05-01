import React from "react";
import { RaceBy } from "@uiball/loaders";

import * as css from "components/loader/loader.module.css";

export const Layout: React.FunctionComponent = () => {
  return (
    <div className={css.loader}>
      <RaceBy size={150} lineWeight={10} speed={1.2} color="var(--color)" />
    </div>
  );
};

export default Layout;
