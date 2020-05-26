import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import favicon from '../../static/favicon.png';

const SEO = props => (
  <StaticQuery
    query={detailsQuery}
    render={(data) => {
      const title = props.title || data.site.siteMetadata.title;
      return (
        <Helmet
          htmlAttributes={{
            lang: 'en',
          }}
          title={title}
          titleTemplate={`%s - ${data.site.siteMetadata.title}`}
          image= {data.site.siteMetadata.image}
          link={[
            { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` },
          ]}
        >
          <meta name="image" content={data.site.siteMetadata.image} />
          </Helmet>
      );
    }}
  />
);

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  keywords: [],
};

export default SEO;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        image
      }
    }
  }
`;
