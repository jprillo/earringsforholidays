import React, { Component } from 'react'
import Layout from "../layout";
import { Link, graphql } from 'gatsby'
import _ from 'lodash'


export default class TagsPage extends Component {
  render() {
    const { group } = this.props.data.allMarkdownRemark

    return (
     <Layout>
        <div className="container">
          <h1>Tags</h1>
          <div className="tag-container">
            {group.map(tag => (
              
              <Link to={`/countries/${_.kebabCase(tag.fieldValue)}`} key={tag.fieldValue} >
                <span className={tag.fieldValue}>
                  {tag.fieldValue} <strong className="count">{tag.totalCount}</strong>
                </span>
              </Link>
            ))}
          </div>
        </div>
        </Layout>
    )
  }
}

export const pageQuery = graphql`
  query TagsQuery {
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`