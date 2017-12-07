import React from 'react'
import Link, { withPrefix } from 'gatsby-link'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import Github from '../components/Icons/Github'
import Mail from '../components/Icons/Mail'
import Twitter from '../components/Icons/Twitter'
import Logo from '../components/Icons/Logo'

const Container = styled.div``
const Navigation = styled.nav`
  position: relative;
  z-index: 100;
  padding: 1em 2em;
  width: 100%;
  align-self: flex-start;
  background: #252627;
  display: flex;
  }
`
const InnerNav = styled.div`
  max-width: 768px;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  align-self: center;
  flex: 1;
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
`
const Nav = () => (
  <Navigation>
    <Link to="/">
      <Logo />
    </Link>{' '}
    <InnerNav>
      {' '}
      {/* <NavLink>Work</NavLink> */} <Link to="/blog"> Blog </Link>{' '}
      <a href="https://github.com/jacobprice" target="blank">
        <Github width={25} height={25} />{' '}
      </a>{' '}
      <a href="https://twitter.com/thatpriceguy">
        <Twitter width={25} height={25} />{' '}
      </a>{' '}
      <a href="mailto:j@cobprice.com">
        <Mail width={25} height={25} />{' '}
      </a>{' '}
    </InnerNav>{' '}
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
        <Helmet>
          <meta name="theme-color" content="#252627" />
        </Helmet>{' '}
        <Nav /> {children()}{' '}
      </Container>
    )
  }
}

export default Template
