import React from "react"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Hero from "../components/Hero"
import Feature from "../components/Feature"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Feature />
  </Layout>
)

export default IndexPage
