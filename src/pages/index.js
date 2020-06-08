import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/about"
import Social from "../components/social"
 


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
  hero: file(relativePath: { eq: "home/C92A9911.jpg" }) {
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