import React from "react"
import styled from "styled-components"

import { useStaticQuery, graphql } from "gatsby"
import Header from "./Header"
import GlobalStyle from "../theme/Global"

const LayoutWrapper = styled.div`
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

export default Layout
