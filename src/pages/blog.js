import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

const Div = styled.div`
  max-width: 768px;
  margin: 0px auto;
  padding: 0px 1em;
`
const Post = styled.h3`
`
const Date = styled.small`
`
class BlogIndex extends React.Component {
  render() {
   console.log(this.props)
   const siteTitle = this.props.data.site.siteMetadata.title
   const posts = this.props.data.allMarkdownRemark.edges
    return (
    <Div>
        <Helmet title={siteTitle} />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <Post>
                <Link style={{color: 'inherit'}} to={node.fields.slug}>{title}</Link>
                 <Date> - {node.frontmatter.date}</Date>
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
            date(formatString: "M/D/YY")
            title
          }
        }
      }
    }
  }
`
