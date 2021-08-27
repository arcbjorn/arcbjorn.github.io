import * as React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

import Layout from "layouts/Layout";
import Books from "components/books/Books";

const Library: React.FunctionComponent = () => {
  return (
    <Layout>
      <Helmet>
        <title>Oleg Luganskiy - Library</title>
      </Helmet>
      <Books />
    </Layout>
  );
};

export default Library;

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
