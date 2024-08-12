import * as React from "react";
import { graphql, Script } from "gatsby";

import { EDocumentDescription } from "types";
import Layout from "layouts/Layout";
import CopyLinks from "components/copy_links/CopyLinks";
import { navigate } from "gatsby";
import SEO from "components/Seo";
import { useI18next } from "gatsby-plugin-react-i18next";

const ExtraPage: React.FunctionComponent = () => {
  const { language } = useI18next();

  return (
    <Layout>
      <Script
        data-website-id="88cd3360-86f7-4497-a654-46d79f251501"
        src="https://analytics.arcbjorn.com/umami.js"
      />
      <SEO
        description={EDocumentDescription.COPY_LINKS}
        slug={`/${language}/copy_links`}
      />
      <CopyLinks />
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
