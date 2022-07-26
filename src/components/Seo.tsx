// components/seo.js
import React from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import { useI18next } from "gatsby-plugin-react-i18next";

interface SEOProps {
  title: string;
  description: string;
  slug: string;
}

const SEO: React.FunctionComponent<SEOProps> = ({
  title,
  description,
  slug,
}) => {
  const { language } = useI18next();

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `);

  return (
    <Helmet
      htmlAttributes={{ lang: language }}
      titleTemplate={`%s | ${data.site.siteMetadata.title}`}
    >
      <title>{title}</title>
      <meta
        name="description"
        content={description || data.site.siteMetadata.description}
      />
      <link rel="canonical" href={`${data.site.siteMetadata.siteUrl}${slug}`} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@arcbjorn" />
      <meta name="og:title" content={title} />
      <meta
        name="og:description"
        content={description || data.site.siteMetadata.description}
      />
      <meta name="og:type" content="website" />
      <meta
        name="og:url"
        content={`${data.site.siteMetadata.siteUrl}/${slug}`}
      />
      <meta name="og:site_name" content={data.site.siteMetadata.title} />
    </Helmet>
  );
};

export default SEO;
