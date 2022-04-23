import * as React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";

import "styles/tailwind.css";
import { EDocumentTitle } from "types";

import Layout from "layouts/Layout";
import Terminal from "components/about/terminal/Terminal";

const IndexPage: React.FunctionComponent = () => {
  return (
    <Layout>
      <Helmet>
        <title>{EDocumentTitle.INDEX_PAGE}</title>
      </Helmet>
      <Terminal />
    </Layout>
  );
};

export default IndexPage;

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
