import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Form from "../components/form"

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


export default ({ data }) => {
    return (
        <Layout 
          location={`inquire`}
          image={data.hero.childImageSharp.fluid}
        >
            <Form />
        </Layout>
    )
}