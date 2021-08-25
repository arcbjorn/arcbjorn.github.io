import * as React from "react";
import { Helmet } from "react-helmet";

import "../styles/tailwind.css";
import Layout from "layouts/Layout";
import Terminal from "components/terminal/Terminal";

const IndexPage: React.FunctionComponent = () => {
  return (
    <Layout>
      <Helmet>
        <title>Oleg Luganskiy</title>
      </Helmet>
      <Terminal />
    </Layout>
  );
};

export default IndexPage;
