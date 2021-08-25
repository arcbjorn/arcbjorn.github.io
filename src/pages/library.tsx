import * as React from "react";

import Layout from "layouts/Layout";
import Books from "components/books/Books";

const Library: React.FunctionComponent = () => {
  return (
    <Layout>
      <title>Library</title>
      <Books />
    </Layout>
  );
};

export default Library;
