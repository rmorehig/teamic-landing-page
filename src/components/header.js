import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { maxWidth } from "../theme/sizes"

const navItems = ["learn", "about", "integrations"]
const HeaderWrapper = styled.header`
  height: 112px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: ${maxWidth};
  margin: 0 auto;
`
const Logo = styled(Link)`
  font-weight: bold;
  font-size: 24px;
`
const Nav = styled.nav``

const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
`

const NavItem = styled(Link)`
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  margin-left: 64px;
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <Logo to="/">{siteTitle}</Logo>
    <Nav>
      <NavList>
        {navItems.map(item => (
          <NavItem key={item} to={item}>
            {item}
          </NavItem>
        ))}
      </NavList>
    </Nav>
  </HeaderWrapper>
)

export default Header
