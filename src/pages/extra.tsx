import * as React from "react";
import { graphql, Script } from "gatsby";

import { EDocumentDescription } from "types";
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
      <Script
        data-website-id="88cd3360-86f7-4497-a654-46d79f251501"
        src="https://analytics.arcbjorn.com/umami.js"
      />
      <SEO
        description={EDocumentDescription.EXTRA}
        slug={`/${language}/extra`}
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
