import React from "react"
import { graphql } from "gatsby"
import { ParallaxLayout } from "../components/parallaxLayout"
import "./about.css"
import { StaticImage } from "gatsby-plugin-image"

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
      <div className="container">
        <div className="imageContainer">
          <StaticImage
            src="../images/about/usthree.jpg"
            alt="Trevor and Shelby Pennington"
            placeholder="blurred"
            layout="fixed"
            width={400}
            height={600}
          />
        </div>

        <div className="bioContainer">
          <p className="title">Trevor + Shelby</p>
        </div>
      </div>
    </ParallaxLayout>
  )
}
