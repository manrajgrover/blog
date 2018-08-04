import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import urljoin from "url-join";
import { DiscussionEmbed, CommentCount } from "disqus-react";

import config from "../../../content/meta/config";

require("core-js/fn/array/find");

const styles = theme => ({
  postComments: {
    margin: "3em 0 0",
    padding: "3em 0 0",
    borderTop: "1px solid #ddd"
  }
});

const PostComments = props => {
  const { classes, slug, title } = props;

  const url = urljoin(config.siteUrl, config.pathPrefix, slug);

  const disqusConfig = {
    url,
    identifier: title,
    title
  };

  return (
    <div id="post-comments" className={classes.postComments}>
      <DiscussionEmbed shortname={config.disqusShortName} config={disqusConfig} />
    </div>
  );
};

PostComments.propTypes = {
  classes: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired
};

export default injectSheet(styles)(PostComments);
