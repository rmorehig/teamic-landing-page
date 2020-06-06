import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./Header"
import styled from "styled-components"
import GlobalStyle from "../theme/Global"
import { maxWidth } from "../theme/sizes"

const LayoutWrapper = styled.div`
  max-width: ${maxWidth};
  margin: 0 auto;
`
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <LayoutWrapper>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <GlobalStyle />
    </LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
