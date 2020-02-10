import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/about"
import Social from "../components/social"



const IndexPage = () => (
  <Layout location={`home`}>
    <SEO title="Home" />
    <About />
    <Social />
  </Layout>
)

export default IndexPage


