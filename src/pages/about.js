import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import AboutPage from "../components/aboutPage"


export const data = graphql`
query {
  hero: file(relativePath: { eq: "inquire/taylarbw.jpg" }) {
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


export default ({ data }) => {
    return (
        <Layout 
          location='about'
          image={data.hero.childImageSharp.fluid}
        >
            <AboutPage />
        </Layout>
    )
}