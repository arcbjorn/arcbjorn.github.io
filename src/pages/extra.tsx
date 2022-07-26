import * as React from "react";
import { graphql } from "gatsby";

import { EDocumentTitle } from "types";
import Layout from "layouts/Layout";
import ExtraInfo from "components/extra/ExtraInfo";
import { navigate } from "gatsby";
import SEO from "components/Seo";
import { useI18next } from "gatsby-plugin-react-i18next";

const ExtraPage: React.FunctionComponent = () => {
  const { language } = useI18next();

  if (
    typeof navigator !== `undefined` &&
    /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    navigate("/");
  }

  return (
    <Layout>
      <SEO
        title={EDocumentTitle.EXTRA}
        description="Extra info"
        image=""
        slug={`${language}/extra`}
      />
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
