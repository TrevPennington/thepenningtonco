import React from "react"
import "./about.css"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import logo from "../images/SVG/t+s.svg"

export default () => {

  const data = useStaticQuery(graphql`
   query {
       usPhoto: file(relativePath: { eq: "demo/amanda-frank-tvw_dg4UYzU-unsplash.jpg" }) {
         childImageSharp {
           fixed(width: 250, height: 250) {
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
          <img src={logo} className='aboutTitle' width='70' height='70' alt='T+S' />
          <p className='aboutBody'>Hello there, we are Trevor and Shelby. We photograph couples at weddings, on mountain-tops, and in the city streets. Our vibe is super chill and we love people who think they are bad in front of cameras, because we are too. </p>
          <Link to='/about'><button className='usLink button'>more about us</button></Link>
        </div>
      </div>
    </div>
  )
}


