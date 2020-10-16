import React from "react"
import { graphql } from "gatsby"

export const data = graphql`
query {
  hero: file(relativePath: { eq: "demo/amanda-frank-tvw_dg4UYzU-unsplash.jpg" }) {
    childImageSharp {
      fluid(
        maxWidth: 1500
        quality: 100
      
        ) {
        ...GatsbyImageSharpFluid
      }
    }
  }

}`

export default ({ data }) => {

    const image = data.hero.childImageSharp.fuild

}

