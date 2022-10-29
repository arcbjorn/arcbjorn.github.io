import * as React from "react";
import { graphql, Script } from "gatsby";

import "styles/tailwind.css";
import { EDocumentDescription } from "types";

import Layout from "layouts/Layout";
import Terminal from "components/about/terminal/Terminal";
import SEO from "components/Seo";

const IndexPage: React.FunctionComponent = () => {
  return (
    <Layout>
      <Script
        data-website-id="88cd3360-86f7-4497-a654-46d79f251501"
        src="https://analytics.arcbjorn.com/umami.js"
      />
      <SEO description={EDocumentDescription.INDEX_PAGE} />
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
