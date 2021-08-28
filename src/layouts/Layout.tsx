import React from "react";

import Header from "components/header/Header";

import * as css from "./layout.module.css";

export const Layout: React.FunctionComponent = ({ children }) => (
  <div className={css.layout}>
    <div className="h-1/6">
      <Header />
    </div>
    <div className="h-5/6">{children}</div>
  </div>
);

export default Layout;
