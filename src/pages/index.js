import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/about"
import Social from "../components/social"
import RecentSection from "../components/recentSection"



const IndexPage = ({ data }) => (
  <Layout 
    location={`home`}
    image={data.hero.childImageSharp.fluid}
  >
    
    
    <SEO title="Home" />
    <About />

    <Social />
  </Layout>
)

export default IndexPage


export const data = graphql`
query {
  hero: file(relativePath: { eq: "demo/amanda-frank-tvw_dg4UYzU-unsplash.jpg" }) {
    childImageSharp {
      fluid(
        maxWidth: 1000
        quality: 100
      
        ) {
        ...GatsbyImageSharpFluid
      }
    }
  }

}`