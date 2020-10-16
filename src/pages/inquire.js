import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Form from "../components/form"

export const data = graphql`
query {
  hero: file(relativePath: { eq: "inquire/celebrate.jpg" }) {
    childImageSharp {
      fluid(
        maxWidth: 1800
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