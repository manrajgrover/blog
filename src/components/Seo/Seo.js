import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import config from "../../../content/meta/config";
import urljoin from "url-join";

import avatar from "../../images/jpg/avatar.jpg";

const Seo = props => {
  const { data } = props;
  const postTitle = ((data || {}).frontmatter || {}).title;
  const postDescription = ((data || {}).frontmatter || {}).description;
  const postCover = ((data || {}).frontmatter || {}).cover;
  const postSlug = ((data || {}).fields || {}).slug;

  const title = postTitle ? `${postTitle} - ${config.shortSiteTitle}` : config.siteTitle;
  const description = postDescription ? postDescription : config.siteDescription;

  let image = postCover ? postCover.childImageSharp.responsiveSizes.src : avatar;
  image = urljoin(config.siteUrl, image);

  let url;

  if (postSlug) {
    url = urljoin(config.siteUrl, config.pathPrefix, postSlug);
  } else {
    url = urljoin(config.siteUrl, config.pathPrefix);
  }

  return (
    <Helmet
      htmlAttributes={{
        lang: config.siteLanguage,
        prefix: "og: http://ogp.me/ns#"
      }}
    >
      {/* General tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      {/* OpenGraph tags */}
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="article" />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:creator"
        content={config.authorTwitterAccount ? config.authorTwitterAccount : ""}
      />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

Seo.propTypes = {
  data: PropTypes.object
};

export default Seo;
