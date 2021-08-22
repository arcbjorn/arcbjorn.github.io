import React from "react";
// import * as css from "./layout.module.css";
import Header from "components/header/Header";
import * as css from "./layout.module.css";

export const Layout: React.FunctionComponent = ({ children }) => (
  <div className={css.layout}>
    <Header />
    {children}
  </div>
);

export default Layout;
