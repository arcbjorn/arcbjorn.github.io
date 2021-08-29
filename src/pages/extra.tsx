import * as React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

import Layout from "layouts/Layout";
import Books from "components/books/Books";
import { EDocumentTitle } from "./types";

const Extra: React.FunctionComponent = () => {
  return (
    <Layout>
      <Helmet>
        <title>{EDocumentTitle.EXTRA}</title>
      </Helmet>
      <Books />
    </Layout>
  );
};

export default Extra;

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
