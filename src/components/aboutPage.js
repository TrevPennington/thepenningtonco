import React from "react"
import "./aboutPage.css"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Test from "../components/test"

export default () => {

  const bio = "This is us. We live in Raleigh, NC with our cat, Kitters but don't like to call anywhere home. We love New England, the PNW, and Canada. This is us. We live in Raleigh, NC with our cat, Kitters but don't like to call anywhere home. We love New England, the PNW, and Canada."

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
            <div classNamme='photos'>
                <Img className='portrait' fluid={data.portrait.childImageSharp.fluid} alt='The Pennington Co.' />
                <Img className='landscape' fluid={data.landscape.childImageSharp.fluid} alt='Trevor and Shelby Pennington' />
            </div>
        </div>

        <div className='contentWrapper'>
            <h1 className='headTitle titleFormat'>we are Trevor and Shelby</h1>
            <div className='text'>
                <p>{bio}</p>
            </div>
            <div className='contact'>
                <h1 className='contactTitle titleFormat'>Let's grab some coffee.</h1>
                <Link to="/inquire"> <button className='contactLink'>inquire</button></Link>
                {/* <Test /> */}
            </div>
        </div>

    </div>
  )
}