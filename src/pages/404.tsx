import * as React from "react";
import { graphql } from "gatsby";

import Layout from "layouts/Layout";
import NotFoundInfo from "components/notFound/NotFoundInfo";
import { EDocumentTitle } from "types";
import SEO from "components/Seo";
import { useI18next } from "gatsby-plugin-react-i18next";

const NotFoundPage: React.FunctionComponent = () => {
  const { language } = useI18next();

  return (
    <Layout>
      <SEO
        title={EDocumentTitle.NOT_FOUND_PAGE}
        description="Not Found 404"
        slug={`${language}/*`}
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
