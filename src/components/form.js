import React from "react"
import "./form.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default () => {

  const data = useStaticQuery(graphql`
  query {
      titlePhoto: file(relativePath: { eq: "demo/amanda-frank-tvw_dg4UYzU-unsplash.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1240) {
            ...GatsbyImageSharpFluid
          }
        }
      }

    }

  `)

    return (
        <div className='formWrapper'>
          {/* <Img
              fluid={data.titlePhoto.childImageSharp.fluid}
              alt='hero image'
              style={{ 
                height: `30vh`,
                }}
                className='hero'
          /> */}

          <div className='contactCta'>

              <h1 id='ctaTitle'>LET'S TALK!</h1>
              <p className='ctaBody'>Trevor and I would love to get to know you and take your photos. Whether it be wedding, elopement, engagement, or a portrait session. Please fill out the form below for availability and pricing info! We are always down to meet for coffee or talk on the phone. We will get back to you within 48 hours.</p>
          </div>
  

          {/* TODO : add a success page, like Squarepatch */}
          <form name='inquiry' method='POST' className='contactForm' data-netlify="true" data-netlify-honeypot="bot-field" >
                  <input type="hidden" name="bot-field" />
                  <input type="hidden" name="form-name" value="inquiry" />
                  
                  <h4 className='formTitle'>say hello</h4>
    
                  <input id='f1' type='text' name='name' required 
                    placeholder="full name*"/>

                  <input id='f2' type='text' name='spouses name' 
                    placeholder="spouses' name" />
                  
                  <input id='f3' type='text' name='event type' required
                    placeholder="type of event*"/>

                  <input id='f4' type='date' 
                    placeholder="date"/>

                  <textarea id='f5' id='moreAbout' name='more about' required
                    placeholder="tell us more about you!*"></textarea>

                  <input id='f6' type='email' name='address' required 
                    placeholder="email address*"/>

                  <input id='f7' type='text' name='how did you hear?'
                    placeholder="how did you hear about us?!"/>

                  <button id='f8' type='submit' className='submitForm'>
                    submit!</button>
           
          </form>

        </div>
    )
}