import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Waves from '../components/waves'

const Test = styled.h1`
  font-size: 100px;
  color: blue;
`
class BlogIndex extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <div>
        <Helmet title={siteTitle} />
        <Waves />
        <Test>Hey</Test>
      </div>
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
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`
