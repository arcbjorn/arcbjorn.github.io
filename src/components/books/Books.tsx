import * as React from "react";
import { Trans } from "gatsby-plugin-react-i18next";

import * as css from "./books.module.css";

const Books: React.FunctionComponent = () => {
  return (
    <div className={css.books}>
      <h1>
        <Trans>title</Trans>
      </h1>
    </div>
  );
};

export default Books;
