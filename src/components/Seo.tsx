// components/seo.js
import React from "react";
import Helmet from "react-helmet";
import { useI18next } from "gatsby-plugin-react-i18next";

interface SEOProps {
  description: string;
  slug?: string;
}

const SITE_TITLE = "Oleg Luganskiy";

const SEO: React.FunctionComponent<SEOProps> = ({ description, slug }) => {
  const { language } = useI18next();

  const currentSiteUrl = process.env.DEVELOPMENT
    ? "http://localhost:8000/"
    : "https://arcbjorn.com/";

  const siteUrl = slug ? `${currentSiteUrl}${slug}` : currentSiteUrl;

  return (
    <Helmet
      htmlAttributes={{ lang: language }}
      titleTemplate={description ? `%s | ${description}` : "%s"}
    >
      <title>{SITE_TITLE}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={siteUrl} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@arcbjorn" />
      <meta name="og:title" content={SITE_TITLE} />
      <meta name="og:description" content={description} />
      <meta name="og:type" content="website" />
      <meta name="og:url" content={siteUrl} />
      <meta name="og:site_name" content={SITE_TITLE} />
    </Helmet>
  );
};

export default SEO;
