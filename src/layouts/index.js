import React from 'react'
import Link, { withPrefix } from 'gatsby-link'
import styled from 'styled-components'

import Github from '../components/Icons/Github'
import Mail from '../components/Icons/Mail'
import Twitter from '../components/Icons/Twitter'

const Container = styled.div`
  background:#252627;
  min-height: 100vh;
`
const Navigation = styled.nav`
  position: relative;
  z-index: 100;
  display: flex;
  padding: 2em 2em;
  justify-content: space-around;
  max-width: 768px;
  margin: 0 auto;
  width: 100%;
  align-self: flex-start;
  > a {
    color: white;
    transition: color 0.2s ease;
    text-decoration: none;
    &:hover {
      color: #FC0853;
      > svg path{
        fill: #FC0853;
        transition: fill 0.2s ease;
      }
    }
  }
`
const Nav = () => (
  <Navigation>
    {/* <NavLink>Work</NavLink> */}
    <Link to='/blog'>Blog</Link>
    <a href='https://github.com/jacobprice' target='blank'>
      <Github width={25} height={25}/>
    </a>
    <a href='https://twitter.com/thatpriceguy'>
      <Twitter width={25} height={25}/>
    </a>
    <a href='mailto:j@cobprice.com'>
      <Mail width={25} height={25}/>
    </a>
  </Navigation>
)
class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <Container>
        <Nav />
      {children()}
      </Container>
    )
  }
}

export default Template
