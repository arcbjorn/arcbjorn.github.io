import * as React from "react";

import * as css from "./books.module.css";

const Books: React.FunctionComponent = () => {
  return (
    <div className={css.books}>
      <h1>Books that I like</h1>
    </div>
  );
};

export default Books;
