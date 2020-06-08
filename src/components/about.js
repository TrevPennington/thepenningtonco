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
           fixed(width: 550, height: 700) {
             ...GatsbyImageSharpFixed
           }
         }
       }

     }

   `)
  return (
    <div className='aboutWrapper'>
      <div className="about">
        <div className='aboutPhoto'>
          <Img 
            fixed={data.usPhoto.childImageSharp.fixed}
            alt='Trevor and Shelby'
          />
        </div>
        <div className='aboutText'>
          <img src={logo} className='aboutTitle' width='90' height='90' alt='T+S' />
          <p className='aboutBody'>Hello there, we are Trevor and Shelby. We photograph couples at weddings, on mountain-tops, and in the city streets. Our vibe is super chill and we love people who think they are bad in front of cameras, because we are too. </p>
          <Link to='/inquire'><button className='usLink button'>say hello</button></Link>
        </div>
      </div>
    </div>
  )
}


