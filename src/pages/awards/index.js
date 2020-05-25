import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';

const Awards = (props) => {
  const testimonials = props.data.allMarkdownRemark.edges;
  return (
    <Layout bodyClass="page-testimonials">
      <SEO title="Testimonials" />
      <div className="intro">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Awards & Recognitions</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container pb-6">
        <div className="row">
          {testimonials.map(edge => (
            <div key={edge.node.frontmatter.path} className="col-12 col-md-6 mb-1">
              <div className="testimonial">
                <div className="testimonials-meta">
                  <h2 className="testimonials-title"><a href='https://www.mcgill.ca/medicine/about/faculty-awards-prizes/clic/about-competition'>{edge.node.frontmatter.title}</a></h2>
                  <p className="testimonials-name">{edge.node.frontmatter.name}</p>
                  <p className="testimonials-jobtitle">{edge.node.frontmatter.jobtitle}</p>
                </div>
                <div
                  className="testimonials-content"
                  dangerouslySetInnerHTML={{ __html: edge.node.html }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query AwardsQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/awards/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            path
            name
            jobtitle
          }
        }
      }
    }
  }
`;

export default Awards;
