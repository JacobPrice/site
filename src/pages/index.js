import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Waves from '../components/Waves'

const Grid = styled.div`
  background: #252627;
  align-self: center;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`
const LastPost = styled.div`
  position: relative;
  h3 a {
    color: #08FDD8;
  }
`
class BlogIndex extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const posts = this.props.data.allMarkdownRemark.edges
    return (
      <Grid>
        <Helmet title={siteTitle} />
        <Waves />
      </Grid>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogQuery {
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
