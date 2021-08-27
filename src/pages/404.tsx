import * as React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

import Layout from "layouts/Layout";
import NotFoundInfo from "components/notFoundInfo/NotFoundInfo";

const NotFoundPage: React.FunctionComponent = () => {
  return (
    <Layout>
      <Helmet>
        <title>Oleg Luganskiy - Not found</title>
      </Helmet>
      <NotFoundInfo />
    </Layout>
  );
};

export default NotFoundPage;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
