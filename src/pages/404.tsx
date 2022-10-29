import * as React from "react";
import { graphql, Script } from "gatsby";

import Layout from "layouts/Layout";
import NotFoundInfo from "components/notFound/NotFoundInfo";
import { EDocumentDescription } from "types";
import SEO from "components/Seo";
import { useI18next } from "gatsby-plugin-react-i18next";

const NotFoundPage: React.FunctionComponent = () => {
  const { language } = useI18next();

  return (
    <Layout>
      <Script
        data-website-id="88cd3360-86f7-4497-a654-46d79f251501"
        src="https://analytics.arcbjorn.com/umami.js"
      />
      <SEO
        description={EDocumentDescription.NOT_FOUND_PAGE}
        slug={`/${language}/*`}
      />
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
