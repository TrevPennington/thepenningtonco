import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import "./social.css"

export default () => {

    const data = useStaticQuery(graphql`
    query {
        one: file(relativePath: { eq: "social/3L8A2085.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 200, maxHeight: 200, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        two: file(relativePath: { eq: "social/C92A8821.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 200, maxHeight: 200, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        three: file(relativePath: { eq: "social/3L8A5272.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 200, maxHeight: 200, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        four: file(relativePath: { eq: "social/3L8A6266.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 200, maxHeight: 200, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
 
      }
    `)


    return (
        <div className='socialWrapper'>

            <div className='socialPhotos'>
              <Img fluid={data.one.childImageSharp.fluid} alt='the pennington co instagram' />
              <Img fluid={data.two.childImageSharp.fluid} alt='the pennington co instagram' />
              <Img fluid={data.three.childImageSharp.fluid} alt='the pennington co instagram' />
              <Img fluid={data.four.childImageSharp.fluid} alt='the pennington co instagram' />
            </div>

            <button className="socialButton"><a href="http://instagram.com/thepennington.co" target="_blank" className="socialButtonLink">let's be friends on Instagram</a></button>
         
            
        </div>
    )
}