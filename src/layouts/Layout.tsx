import React from "react";
// import * as css from "./layout.module.css";
import Header from "components/header/Header";

export const Layout: React.FunctionComponent = ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
);

export default Layout;
