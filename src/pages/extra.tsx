import * as React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

import { EDocumentTitle } from "types";
import Layout from "layouts/Layout";
import ExtraInfo from "components/extra/ExtraInfo";
import { navigate } from "gatsby";

const ExtraPage: React.FunctionComponent = () => {
  if (
    /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    navigate("/");
  }

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
