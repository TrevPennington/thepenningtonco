import React from "react"
import "./about.css"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import logo from "../images/SVG/t+s.svg"
import styled from 'styled-components'


export default () => {

  const data = useStaticQuery(graphql`
   query {
       usPhoto: file(relativePath: { eq: "about/kitters.jpg" }) {
         childImageSharp {
           fluid(maxWidth: 300, maxHeight: 500, quality: 100) {
             ...GatsbyImageSharpFluid
           }
         }
       }

     }

   `)

   const aboutBodyText = "Hello there, we are Trevor and Shelby. We photograph couples at weddings, on mountain-tops, and in the city streets. Our vibe is super chill and we love being friends with the people we photograph."
  return (
    <div className='aboutWrapper'>
      <div className="about">
       
          <Img 
            fluid={data.usPhoto.childImageSharp.fluid}
            className='aboutPhoto'
            alt='Trevor and Shelby'
          />
   
        <div className='aboutText'>
          <img src={logo} className='aboutTitle' width='90' height='90' alt='T+S' />
          <p className='aboutBody'>{aboutBodyText}</p>
          <Link to='/about'><button className='usLink button'>more about us</button></Link>
        </div>
        
      </div>
    </div>
  )
}


