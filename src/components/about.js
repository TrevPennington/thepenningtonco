import React from "react"
import "./about.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

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
          <img src={'Users/trevorpennington/thepenningtonco/src/images/SVG/t+s.svg'} className='aboutTitle' width='70' height='70' alt='T+S' />
          <p className='aboutBody'>Hello there, we are Trevor and Shelby. We photograph couples at weddings, on mountain-tops, and in the city streets. Our vibe is super chill and we love people who think they are bad in front of cameras, because we are too. </p>
          <button className='usLink button'>more about us</button>
        </div>
      </div>
    </div>
  )
}


