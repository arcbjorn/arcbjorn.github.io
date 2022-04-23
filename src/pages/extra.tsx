import * as React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

import { EDocumentTitle } from "types";
import Layout from "layouts/Layout";
import ExtraInfo from "components/extra/ExtraInfo";

const ExtraPage: React.FunctionComponent = () => {
  return (
    <Layout>
      <Helmet>
        <title>{EDocumentTitle.EXTRA}</title>
      </Helmet>
      <ExtraInfo />
    </Layout>
  );
};

export default ExtraPage;

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
