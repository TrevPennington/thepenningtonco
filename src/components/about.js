import React from "react"
import "./about.css"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import logo from "../images/SVG/t+s.svg"
import styled from 'styled-components'


export default () => {

  const data = useStaticQuery(graphql`
   query {
       usPhoto: file(relativePath: { eq: "inquire/trevandshelby.jpg" }) {
         childImageSharp {
           fluid(maxWidth: 600, maxHeight: 375, quality: 100) {
             ...GatsbyImageSharpFluid
           }
         }
       }

     }

   `)

    const aboutBodyText = "Hey, We're Trevor and Shelby!"
    const aboutBodyText1 = "a husband and wife photographer team based out of Raleigh, NC."
    const aboutBodyText2 = "On our day off you can find us drinking smoothies, thrifting around town, shopping at REI or hiking our favorite trails."
  
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
          <p className='aboutBody'>{aboutBodyText}<br/>{aboutBodyText1}<br/>{aboutBodyText2}</p>
          <Link to='/about'><button className='usLink button'>more about us</button></Link>
        </div>
        
      </div>
    </div>
  )
}


