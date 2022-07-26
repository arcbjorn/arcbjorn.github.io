import * as React from "react";
import { graphql } from "gatsby";

import "styles/tailwind.css";
import { EDocumentTitle } from "types";

import Layout from "layouts/Layout";
import Terminal from "components/about/terminal/Terminal";
import SEO from "components/Seo";
import { useI18next } from "gatsby-plugin-react-i18next";

const IndexPage: React.FunctionComponent = () => {
  const { language } = useI18next();

  return (
    <Layout>
      <SEO
        title={EDocumentTitle.INDEX_PAGE}
        description=""
        image=""
        slug={`${language}`}
      />
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
