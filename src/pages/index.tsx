import * as React from "react";
import "../styles/tailwind.css";

import Layout from "layouts/Layout";
import Terminal from "components/terminal/Terminal";

const IndexPage: React.FunctionComponent = () => {
  return (
    <Layout>
      <Terminal />
    </Layout>
  );
};

export default IndexPage;
