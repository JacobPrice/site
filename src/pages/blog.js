import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

const Div = styled.div`
    margin: 0 auto;
    max-width: 700px;
    padding: 2em;
`
const Year = styled.h2`
    border: 0;
    color: #08FDD8;
    font-weight: 300;
`
const Post = styled.h3`
    color: #08FDD8;
    font-weight: 400;
    font-size: 1em;
`
const Date = styled.small`
    color: #4D4D4E;
`
class BlogIndex extends React.Component {
  render() {
   console.log(this.props)
   const siteTitle = this.props.data.site.siteMetadata.title
   const posts = this.props.data.allMarkdownRemark.edges
    return (
    <Div>
        <Year>2017</Year>
        <Helmet title={siteTitle} />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <Post>
                <Link style={{color: 'inherit'}} to={node.fields.slug}>{title}</Link>
                 <Date> {node.frontmatter.date}</Date>
              </Post>
            </div>
          )
        })}
    </Div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "M/D")
            title
          }
        }
      }
    }
  }
`
