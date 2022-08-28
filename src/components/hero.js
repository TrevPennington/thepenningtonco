import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "demo/fail.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div>
      <Img
        fluid={data.file.childImageSharp.fluid}
        alt="Home hero image"
        style={{
          height: `100vh`,
          zIndex: "0",
        }}
      />
    </div>
  )
}
