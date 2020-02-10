import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"

export default () => {
    const data = useStaticQuery(graphql`
    query {
        file(relativePath: { eq: "demo/amanda-frank-tvw_dg4UYzU-unsplash.jpg" }) {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fluid(maxWidth: 1240) {
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
              alt='Home hero image'
              style={{ 
                height: `100vh`,
                position: `relative`,
                }}
            />
        </div>
    )
}