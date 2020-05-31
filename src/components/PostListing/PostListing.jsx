import React from "react";
import { Link } from "gatsby";
import _ from "lodash";


class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        description: postEdge.node.frontmatter.description,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  }

  render() {
    const postList = this.getPostList();
    
    return (
      <div className="post-listing-wrap">
        {/* Your post list here. */
        postList.map(post => (
          
          <Link className="post col-2" to={post.path} key={post.title}>
           
            <h3 
            >{post.title}</h3>
            <img width="100%" src={`https://github.com/jprillo/earringsforholidays/blob/master/content/${(post.title)}/${_.kebabCase(post.cover)}`}/> 
        <p>{post.description}</p>
           
          </Link>
        
          
        ))}
      </div>
    );
  }
}

export default PostListing;
