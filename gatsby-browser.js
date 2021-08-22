/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";
import { Provider } from "react-redux";

import createStore from "./src/state/createStore";

const wrapWithProvider = ({ element }) => {
  const store = createStore();
  return <Provider store={store}>{element}</Provider>;
};

export const wrapRootElement = wrapWithProvider;
