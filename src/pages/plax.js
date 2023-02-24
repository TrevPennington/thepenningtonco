import React from "react"
import { graphql } from "gatsby"
import { ParallaxLayout } from "../components/parallaxLayout"
import { AboutPage } from "../components/aboutPage"
export const data = graphql`
  query {
    hero: file(relativePath: { eq: "covers/final/bg10.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default ({ data }) => {
  return (
    <ParallaxLayout location="about" imageSrc={data.hero.childImageSharp.fluid}>
      <AboutPage />
    </ParallaxLayout>
  )
}
