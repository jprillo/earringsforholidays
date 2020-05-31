import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import {Link} from "gatsby"

class About extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout>
        <div className="landing-container">
          <div className="posts-container">
            <Helmet title={config.siteTitle} />
            <SEO />
            <h1>Vyntrade</h1>
            <h2>Nav</h2>
            <p className="brand">Brand</p>
            <Link className="brand-link" to="/countries/italy/">Italy</Link>
            <p>Country</p>
            <Link to="/countries/yellowdog">YELLOWDOG</Link>
            <PostListing postEdges={postEdges} />
          </div>
        </div>
      </Layout>
    );
  }
}

export default About;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query AboutQuery {
    allMarkdownRemark(sort: { fields: [fields___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            description
            date
          }
        }
      }
    }
  }
`;
