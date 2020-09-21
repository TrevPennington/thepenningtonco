import React from "react"
import "./aboutPage.css"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Test from "../components/test"

export default () => {

  const bio = "The two of us live in Raleigh, North Carolina in our small & cozy home along with our cat, Kitters. Although we call North Carolina home, we love spending our free time exploring new cities and states whenever the opportunity presents itself! We both have been photographing for 5+ years, but officially created the Pennington Co. when we got married in 2017. We truly have a passion for photography and continue to be grateful to be able to work along side each other as husband and wife."
  const biotwo = "Our style is very laid back and easy going. We strive to make our photography a fun and positive experience! We look forward to capturing all of your special moments and hope to make your time with us a memorable adventure! If our style is what you are looking for and would like to get to know us more, head over to our inquire page and fill out our form. We would love to meet you! - Shelby & Trevor Pennington"
  const data = useStaticQuery(graphql`
   query {
       landscape: file(relativePath: { eq: "about/usthree.jpg" }) {
         childImageSharp {
           fluid(maxWidth: 600, quality: 100) {
             ...GatsbyImageSharpFluid
           }
         }
       }

       portrait: file(relativePath: { eq: "about/kitters.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }

     }

   `)
  return (
    <div className='aboutPageWrapper'>

        <div className='headWrapper'>

        <div className='aboutContentWrapper'>
            <h1 className='headTitle titleFormat'>we are Trevor and Shelby</h1>
            <div className='text'>
                <p>{bio}</p>
                <p>{biotwo}</p>
            </div>

            <div className='contact'>
                <h1 className='contactTitle titleFormat'>Let's grab some coffee.</h1>
                <Link to="/inquire"> <button className='contactLink'>say hello</button></Link>
            </div>

        </div>
        
            <div className='photoWrapper'>
                <Img className='portrait' fluid={data.portrait.childImageSharp.fluid} alt='The Pennington Co.' />
                <Img className='landscape' fluid={data.landscape.childImageSharp.fluid} alt='Trevor and Shelby Pennington' />
            </div>

        </div>



    </div>
  )
}